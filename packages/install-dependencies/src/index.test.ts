import { test, expect } from 'vitest';
import fs from 'fs'
import { exec } from 'child_process'
import { installDependencies } from './install-dependencies'

const pathToInstallDependencies = './packages/install-dependencies/'
const runInstallDependencies = `ts-node ${pathToInstallDependencies}src/index.ts run`
const configFixtureDirectory = `${pathToInstallDependencies}__fixtures__/`
const standardTestPackageJson = `test.package.json`
const testDirectory = `${pathToInstallDependencies}tests/`
const standardTestDirectory = 'standard/'

/**
 * @todo write more tests!
 * const ignoreTestPackageJson = `test.ignore.package.json`
 * const includeTestPackageJson = `test.include.package.json`
 * const allTestPackageJson = `test.all.package.json`
 */

const cleanUpTestDirectory = () => exec(`rm -rf ${testDirectory}`)

test('CLI installs dependencies', async () => {
  const config = `${configFixtureDirectory}${standardTestPackageJson}`
  const dest = `${testDirectory}${standardTestDirectory}`
  const script = `${runInstallDependencies} ${config} ${dest}`
  await exec(script, () => {
    const isTestFolderEmpty = fs.readdirSync(dest)
    expect(isTestFolderEmpty.length).toEqual(2)
    cleanUpTestDirectory()
  })
})

test('functionally installs dependencies', async () => {
  const config = `${configFixtureDirectory}${standardTestPackageJson}`
  const dest = `${testDirectory}${standardTestDirectory}`
  const result = await installDependencies({ config, dest })
  expect(result).toEqual({
    config: './packages/install-dependencies/__fixtures__/test.package.json',
    deependenciesInstalled: ['ramda@0.27.1', 'typescript@4.1.3', 'ink@^3.0.8'],
    dest: './packages/install-dependencies/tests/standard/',
  })
  exec(`rm -rf ${testDirectory}`)
})
