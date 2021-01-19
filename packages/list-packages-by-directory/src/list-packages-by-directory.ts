#!/usr/bin/env node

import glob from 'tiny-glob/sync'
import fs from 'fs'

type Process = {
  exit: (code?: number) => void
  stdout: {
    write: (name: string) => void
  }
}

export type ListPackagesByDirectoryOptions = {
  directory: string
  process: Process
  monorepoName?: string
}

export async function listPackagesByDirectory({ directory, process }): Promise<string[]> {
  const packagesJsonsInDirectory = await glob(`${directory}/*/package.json`)
  const packageNames = packagesJsonsInDirectory.map((pkg) => JSON.parse(fs.readFileSync(pkg).toString()).name)
  if (packageNames.length === 0) {
    process.exit(0)
  } else if (packageNames.length === 1) {
    process.stdout.write(packageNames[0])
  } else {
    const list = `{${packageNames.join(',')}}`
    process.stdout.write(list)
  }
  return packageNames
}
