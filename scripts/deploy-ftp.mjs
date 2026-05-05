import { existsSync } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { Client, FileType } = require('basic-ftp')
const colors = {
    blue: '\x1b[34m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    reset: '\x1b[0m',
}

const args = process.argv.slice(2)
const projectRoot = process.cwd()
const isDryRun = args.includes('--dry-run')

const getArgValue = (values, name) => {
    const index = values.indexOf(name)
    return index === -1 ? undefined : values[index + 1]
}

const configPath = getArgValue(args, '--config') ?? 'scripts/ftp.deploy.json'

const main = async () => {
    logStep('START', 'FTP deploy started.')
    const config = await readConfig(configPath)
    const localDir = resolve(projectRoot, config.localDir ?? 'dist')
    const remoteDir = normalizeRemoteDir(config.remoteDir)

    validateConfig(config, remoteDir)

    await runBuild()

    if (!existsSync(localDir)) {
        throw new Error(`Build output was not found: ${localDir}`)
    }

    logStep('OK', `Build output found: ${localDir}`)

    if (isDryRun) {
        logStep('DRY-RUN', 'Skipping remote cleanup and FTP upload.')
        logStep('SUCCESS', 'Dry-run completed.')
        return
    }

    const client = new Client()
    client.ftp.verbose = Boolean(config.verbose)

    try {
        logStep('FTP', `Connecting to ${config.host}:${config.port ?? 21}...`)
        await client.access({
            host: config.host,
            port: config.port ?? 21,
            user: config.user,
            password: config.password,
            secure: config.secure ?? false,
            secureOptions: config.secureOptions,
        })
        logStep('OK', 'FTP connection established.')

        logStep('FTP', `Preparing remote directory: ${remoteDir}`)
        await client.ensureDir(remoteDir)
        await client.cd(remoteDir)
        logStep('OK', 'Remote directory is ready.')

        logStep('FTP', 'Cleaning remote directory contents...')
        const removedCount = await removeRemoteContents(client)
        logStep('OK', `Remote cleanup completed. Removed ${removedCount} item(s).`)

        logStep('FTP', `Uploading ${localDir} to ${remoteDir}...`)
        await client.uploadFromDir(localDir)
        logStep('SUCCESS', 'FTP deploy completed.')
    } finally {
        client.close()
    }
}

const readConfig = async (path) => {
    const fullPath = resolve(projectRoot, path)

    if (!existsSync(fullPath)) {
        throw new Error(
            `FTP config was not found: ${fullPath}\n` +
                'Create scripts/ftp.deploy.json from scripts/ftp.deploy.example.json.'
        )
    }

    return JSON.parse(await readFile(fullPath, 'utf8'))
}

const validateConfig = (config, remoteDir) => {
    const requiredFields = ['host', 'user', 'password', 'remoteDir']
    const missing = requiredFields.filter((field) => !config[field])

    if (missing.length > 0) {
        throw new Error(`Missing FTP config field(s): ${missing.join(', ')}`)
    }

    if (remoteDir === '/' || remoteDir === '.' || remoteDir === '') {
        throw new Error('Refusing to clean an unsafe remoteDir. Use a specific deploy directory.')
    }
}

const normalizeRemoteDir = (remoteDir) => {
    return String(remoteDir ?? '')
        .replaceAll('\\', '/')
        .replace(/\/+$/u, '')
}

const runBuild = async () => {
    logStep('BUILD', 'Running npm run build...')
    await runCommandWithFallback(getNpmCommands(), ['run', 'build'])
    logStep('OK', 'Build completed.')
}

const runCommandWithFallback = async (commands, commandArgs) => {
    let lastError

    for (const command of commands) {
        try {
            await runCommand(command, commandArgs)
            return
        } catch (error) {
            lastError = error

            if (error.code !== 'ENOENT' && error.code !== 'EINVAL') {
                throw error
            }

            logStep('WARN', `Failed to start ${command}: ${error.code}. Trying fallback command...`)
        }
    }

    throw lastError
}

const getNpmCommands = () => {
    if (process.platform !== 'win32') {
        return ['npm']
    }

    const commands = ['npm.cmd']
    const programFilesNpm = 'C:\\Program Files\\nodejs\\npm.cmd'

    if (existsSync(programFilesNpm)) {
        commands.push(programFilesNpm)
    }

    return commands
}

const runCommand = (command, commandArgs) => {
    return new Promise((resolvePromise, reject) => {
        const child = spawn(command, commandArgs, {
            cwd: projectRoot,
            stdio: 'inherit',
            shell: process.platform === 'win32',
        })

        child.on('error', reject)
        child.on('exit', (code) => {
            if (code === 0) {
                resolvePromise()
                return
            }

            reject(new Error(`${command} ${commandArgs.join(' ')} failed with exit code ${code}`))
        })
    })
}

const removeRemoteContents = async (client) => {
    const entries = await client.list()
    let removedCount = 0

    for (const entry of entries) {
        if (entry.name === '.' || entry.name === '..') {
            continue
        }

        if (isRemoteDirectory(entry)) {
            await client.removeDir(entry.name)
            removedCount += 1
            continue
        }

        await client.remove(entry.name)
        removedCount += 1
    }

    return removedCount
}

const isRemoteDirectory = (entry) => {
    return entry.isDirectory === true || entry.type === FileType.Directory
}

const logStep = (label, message) => {
    const colorByLabel = {
        START: colors.blue,
        BUILD: colors.blue,
        FTP: colors.blue,
        'DRY-RUN': colors.blue,
        OK: colors.green,
        SUCCESS: colors.green,
        WARN: colors.yellow,
        FAILED: colors.red,
    }
    const color = colorByLabel[label]
    const line = color
        ? `${color}[deploy:${label}] ${message}${colors.reset}`
        : `[deploy:${label}] ${message}`

    if (label === 'FAILED') {
        console.error(line)
        return
    }

    console.log(line)
}

main().catch((error) => {
    logStep('FAILED', error.message)
    process.exitCode = 1
})
