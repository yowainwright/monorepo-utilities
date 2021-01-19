# @monorepo-utilities/list-packages-by-directory 🧱 ፨

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40monorepo-utilities%2Flist-packages-by-directory.svg)](https://www.npmjs.com/package/@monorepo-utilities/list-packages-by-directory)

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

- Run builds with more control
- Running build and test convenience

## Use Case

Consider the following paragraphs to decide whether **list-packages-by-directory** can assist your project!

### Building AND Testing Monorepo Woos

Monorepo packages are **not** the same!

When initially looking at monorepos, it is easy to imagine building small re-usable chunks of code to be used \*interdependently in a project. \*See [lerna](https://github.com/lerna/lerna) code for [reference](https://github.com/lerna/lerna/blob/main/utils/check-working-tree/package.json#L33).

OR, also, invisioning monorepos being used as a uniform system of code modules to be used in project to construct its \*output in a uniform way. \*See [@rollup/plugins](https://github.com/rollup/plugins) for reference.

Monorepos can provide whole other sort of power! Consider, [Readwoodjs](https://redwoodjs.com/) for [reference](https://redwoodjs.com/docs/introduction.html#how-it-works). Monorepos can provides team power by **interconnectivity**! If carefully considered, monorepos can include apps (frontend applications), services (backend services), and still include packages that act as utilities.

In order to do build monorepos for team power by **interconnectivity**, Developer Experience (DX) must be considered so that module install times remain fast, commits remain fast, and ci/cd remain fast!

### How list-packages-by-directory helps

Here's a short list of how **list-packages-by-directory** helps!

- **list-packages-by-directory** installs all dependencies specific to a config (a `package.json`)'s dependencies.
- **list-packages-by-directory** will optionally ignore dependencies specified in a config (a `package.json`)'s `installDependencies.ignore` array.
- **list-packages-by-directory** will optionally override dependencies or add dependencies specified in a config (a `package.json`)'s `installDependencies.include` object.

Here's a code example of `package.json` script running **list-packages-by-directory**.

```json
"build:services:ci": "services=$(list-packages-by-directory 'services'); lerna run build --scope \"$services\" --since origin/master",
// The script above gets a dyanmic list of services to builds them
```

Here's how the script could look if **without list-packages-by-directory**.

```json
"build:services:ci": "lerna run build --scope '{@test/bar-app,@test/foo-app}' --since origin/master",
```

The second script is easier to read, true! However, with **list-packages-by-directory**, as many "services" as are needed can be added to the "services" directory and they'll be built automatically with **list-packages-by-directory**!

## Roadmap

Here are a few features that will be added momentarily:

- a flag to not return a string in lerna format, (with the extra `{}` wrapping the returned string)
- a burger with cheese that in delicous and **only** 100 calories 🍔

## Thanks

- Thanks [Luke Edwards](https://github.com/lukeed) for [Sade](https://github.com/lukeed/sade).
- Thanks [Terkel](https://github.com/terkelg) for [Tiny Glob](https://github.com/terkelg/tiny-glob).
- Thanks [Will Jacobson](https://github.com/willzjacobson) for implementing a usable example of this feature in our team's monorepo.

## Monorepo Utilities 🧱

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

View other [monorepo utilities](../../).
