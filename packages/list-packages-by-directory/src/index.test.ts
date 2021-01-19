import { exec } from 'child_process'
// import { installDependencies } from './index'

/**
 * @todo write more tests!
 */

describe('list-packages-by-directory', () => {
  const pathToListPackagesByDirectory = './packages/list-packages-by-directory/'
  const runListPackagesByDirectory = `ts-node ${pathToListPackagesByDirectory}src/index.ts in`
  const fixtureDirectory = `${pathToListPackagesByDirectory}__fixtures__/`
  it('lists packages', (done) => {
    const string = `${runListPackagesByDirectory} ${fixtureDirectory}apps`
    exec(string, (_, stdout) => {
      console.log('here 1')
      expect(stdout).toEqual('{@test/bar-app,@test/foo-app}')
      done()
    })
  })
})
