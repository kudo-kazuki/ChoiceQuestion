import { existsSync } from 'node:fs'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const ts = require('typescript')

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pagesDir = resolve(projectRoot, 'src/pages')
const testQuestionsDir = resolve(projectRoot, 'src/assets/test_questions')
const manifestPath = resolve(testQuestionsDir, 'manifest.ts')

const main = async () => {
    const questionSets = await discoverQuestionSets()
    const counts = {}

    for (const questionSet of questionSets) {
        counts[questionSet.route] = await countQuestionSet(questionSet.source)
    }

    await writeFile(manifestPath, buildManifest(counts), 'utf8')
    console.log(`[question-manifest] Updated ${relativePath(manifestPath)}`)
}

const discoverQuestionSets = async () => {
    const pagePaths = await collectVuePagePaths(pagesDir)
    const questionSetsByRoute = new Map()

    for (const pagePath of pagePaths) {
        const content = await readFile(pagePath, 'utf8')
        const route = pagePathToRoute(pagePath)
        const sources = extractQuestionSources(content)

        for (const source of sources) {
            const existingSource = questionSetsByRoute.get(route)

            if (existingSource && existingSource !== source) {
                throw new Error(
                    `Multiple question sources were found for route ${route}: ${existingSource}, ${source}`,
                )
            }

            questionSetsByRoute.set(route, source)
        }
    }

    return [...questionSetsByRoute.entries()]
        .map(([route, source]) => ({ route, source }))
        .sort((a, b) => a.route.localeCompare(b.route))
}

const collectVuePagePaths = async (dir) => {
    const entries = await readdir(dir, { withFileTypes: true })
    const paths = await Promise.all(
        entries.map(async (entry) => {
            const entryPath = resolve(dir, entry.name)

            if (entry.isDirectory()) {
                return collectVuePagePaths(entryPath)
            }

            if (entry.isFile() && entry.name.endsWith('.vue')) {
                return [entryPath]
            }

            return []
        }),
    )

    return paths.flat().sort()
}

const pagePathToRoute = (pagePath) => {
    const pageRelativePath = relative(pagesDir, pagePath).replaceAll('\\', '/')
    const segments = pageRelativePath.replace(/\.vue$/, '').split('/')

    if (segments.at(-1) === 'index') {
        segments.pop()
    }

    return `/${segments.join('/')}` || '/'
}

const extractQuestionSources = (content) => {
    const sources = new Set()
    const questionImportPattern = /@\/assets\/test_questions\/([^'")]+)/g
    let match = questionImportPattern.exec(content)

    while (match) {
        const source = match[1]

        if (source !== 'manifest') {
            sources.add(source)
        }

        match = questionImportPattern.exec(content)
    }

    return sources
}

const countQuestionSet = async (source) => {
    const sourcePath = resolveQuestionSourcePath(source)

    if (sourcePath.endsWith('.ts')) {
        return countQuestionFile(sourcePath)
    }

    const files = await readdir(sourcePath)
    const questionFiles = files
        .filter((file) => file.endsWith('.ts') && file !== 'index.ts')
        .sort()

    const counts = await Promise.all(
        questionFiles.map((file) => countQuestionFile(join(sourcePath, file))),
    )

    return counts.reduce((total, count) => total + count, 0)
}

const resolveQuestionSourcePath = (source) => {
    const sourcePath = resolve(testQuestionsDir, source)

    if (existsSync(sourcePath)) {
        return sourcePath
    }

    const sourceTsPath = `${sourcePath}.ts`

    if (existsSync(sourceTsPath)) {
        return sourceTsPath
    }

    throw new Error(`Question source was not found: ${sourcePath}`)
}

const countQuestionFile = async (filePath) => {
    const content = await readFile(filePath, 'utf8')
    const sourceFile = ts.createSourceFile(
        filePath,
        content,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS,
    )
    let count = 0

    const visit = (node) => {
        if (
            ts.isVariableDeclaration(node) &&
            ts.isIdentifier(node.name) &&
            isQuestionArrayName(node.name.text) &&
            node.initializer &&
            ts.isArrayLiteralExpression(node.initializer)
        ) {
            count += node.initializer.elements.length
        }

        ts.forEachChild(node, visit)
    }

    visit(sourceFile)
    return count
}

const isQuestionArrayName = (name) => {
    return name === 'testQuestions' || name.endsWith('Questions')
}

const buildManifest = (counts) => {
    const entries = Object.entries(counts)
        .map(([route, count]) => `    '${route}': ${count},`)
        .join('\n')

    return `// This file is generated by scripts/generate-question-manifest.mjs.\n// Do not edit it manually.\n\nexport const questionSetCounts = {\n${entries}\n} as const\n\nexport type QuestionSetPath = keyof typeof questionSetCounts\n`
}

const relativePath = (path) => {
    return path.replace(`${projectRoot}\\`, '').replaceAll('\\', '/')
}

main().catch((error) => {
    console.error(`[question-manifest] Failed: ${error.message}`)
    process.exitCode = 1
})
