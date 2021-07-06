import { exec } from 'child_process'
// import { installDependencies } from './index'

describe('list-packages-by-directory', () => {
  const pathToListPackagesByDirectory = './packages/list-packages-by-directory/'
  const runListPackagesByDirectory = `ts-node ${pathToListPackagesByDirectory}src/index.ts in`
  const fixtureDirectory = `${pathToListPackagesByDirectory}__fixtures__/`
  it('lists packages', async (done) => {
    const string = `${runListPackagesByDirectory} ${fixtureDirectory}apps`
    await exec(string, (_, stdout) => {
      expect(stdout).toEqual('{@test/bar-app,@test/foo-app}')
      done()
    })
  })
})
