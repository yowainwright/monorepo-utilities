import fs from 'fs'
import rimraf from 'rimraf'
import { exec } from 'child_process'
import { installDependencies } from './install-dependencies'

const pathToInstallDependencies = './packages/install-dependencies/'
const runInstallDependencies = `ts-node ${pathToInstallDependencies}src/index.ts run`
const configFixtureDirectory = `${pathToInstallDependencies}__fixtures__/`
const standardTestPackageJson = `test.package.json`
const testDirectory = `${pathToInstallDependencies}tests/`

describe('@monorepo-utilities', () => {
  describe('install-dependencies', () => {
    /**
     * @todo hack rm -rf runs on last test only intentionally
     * - look into rimraf and or other clean executions
     */
    it('functionally installs dependencies', async () => {
      const config = `${configFixtureDirectory}${standardTestPackageJson}`
      const dest = `${testDirectory}fn`
      const result = await installDependencies({ config, dest })
      expect(result).toEqual({
        config: './packages/install-dependencies/__fixtures__/test.package.json',
        deependenciesInstalled: ['ramda@0.27.1', 'typescript@4.1.3', 'ink@^3.0.8'],
        dest: './packages/install-dependencies/tests/fn',
      })
    })

    it('CLI installs dependencies', async (done) => {
      const config = `${configFixtureDirectory}${standardTestPackageJson}`
      const dest = `${testDirectory}standard`
      const script = `${runInstallDependencies} ${config} ${dest}`
      await exec(script, async () => {
        const isTestFolderEmpty = fs.readdirSync(dest)
        expect(isTestFolderEmpty.length).toEqual(3)
        await rimraf(testDirectory, () => done())
      })
    })
  })
})
