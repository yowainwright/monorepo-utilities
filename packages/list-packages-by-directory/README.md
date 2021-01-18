# @monorepo-utilities/list-packages-by-directory 🧱 ፨

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40monorepo-utilities%2Finstall-dependencies.svg)](https://www.npmjs.com/package/@monorepo-utilities/install-dependencies)

Writes a list in string format of each package's name key to a directory.

---

## Install

```sh
yarn add @monorepo-utilities/list-packages-by-directory
```

## Usage

As a CLI

```sh
list-packages-by-directory from <dir>
# => '@foo/bar,@foo/biz,@foo/baz'
```

As a function

```typescript
import { listPackagesByDirectory } from '@monorepo-utilities/list-packages-by-directory'

const directoryList = listPackagesByDirectory({ <dir> })
// => writes a list in string format from a directory
// => returns an array of strings containing each
```

## CLI API

```txt
  Usage
    $ list-packages-by-directory from <command> [options]

  Available Commands
    from    installs a package.json's dependencies to a specificied path

  For more info, run any command with the `--help` flag
    $ list-packages-by-directory run --help

  Options
    -v, --version    Displays current version
    -h, --help       Displays this message
```

## Arguments

- **`<dir>`**: a string containg a directory name within a monorepo

## Why

When using various project managers for monorepos, like [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [lerna](https://github.com/lerna/lerna), package building can be difficult to run asynchronously **or** based on package dependencies.

Listing out packages by directory can assist is decoupling package building.

## Benefits

Listed below are a few benefits to using **list-packages-by-directory**.

- Build control
- Build and testing convenience

## Use Case

Consider the following paragraphs to decide whether **list-packages-by-directory** can assist your project!

### Building AND Testing Monorepo Woos

Monorepo packages are **not** the same!

When initially looking at monorepos, it is easy to imagine building small re-usable chunks of code to be used _interdependently in a project. See [lerna](https://github.com/lerna/lerna) code for _[reference](https://github.com/lerna/lerna/blob/main/utils/check-working-tree/package.json#L33). OR, also, monorepos can be used as a uniform system of code chunks to be used in projects to construct the project *outputs in a uniform way. *See [@rollup/plugins](https://github.com/rollup/plugins) for reference.

However, monorepos can provide a whole other level of power when packages are not built to perform a similar purpose. Consider, [Readwoodjs](https://redwoodjs.com/) for [reference](https://redwoodjs.com/docs/introduction.html#how-it-works). Monorepos can provides team power by interconnectivity! If carefully considered, monorepos can include...

### How install-dependencies helps

Here's a short list of how **list-packages-by-directory** helps!

- **install-dependencies** installs all dependencies specific to a config (a `package.json`)'s dependencies.
- **install-dependencies** will optionally ignore dependencies specified in a config (a `package.json`)'s `installDependencies.ignore` array.
- **install-dependencies** will optionally override dependencies or add dependencies specified in a config (a `package.json`)'s `installDependencies.include` object.

## Thanks

- Thanks [Luke Edwards](https://github.com/lukeed) for [Sade](https://github.com/lukeed/sade).
- Thanks []() for [Tiny Glob]().
- Thanks [Will Jacobson]() for implementing a usable example of this feature in our team's monorepo.

## Monorepo Utilities 🧱

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

View other [monorepo utilities](../../).
