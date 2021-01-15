# @monorepo-utilities/install-dependencies 🧱 📦

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40monorepo-utilities%2Fbuild-node-modules.svg)](https://badge.fury.io/js/%40monorepo-utilities%2build-node-modules)

Installs dependencies from a config to a destination with control!

---

## Install

```sh
yarn add @monorepo-utilities/build-node-modules
```

## Usage

As a CLI

```sh
install-dependencies run <config> <dest>
# => installs packages (node_modules) from a config (like package.json) to a specified path
```

As a function

```typescript
import { installDependencies } from '@monorepo-utilities/install-dependencies'

const dependencies = installDependencies({ <config>, <dest> })
// => installs dependencies from a package.json (<config>) to the specified destination (<dest>)
// => returns an object with installedDependencies, config, dest
```

## CLI API

```txt
  Usage
    $ install-dependencies <command> [options]

  Available Commands
    run    installs a package.json's dependencies to a specificied path

  For more info, run any command with the `--help` flag
    $ install-dependencies run --help

  Options
    -v, --version    Displays current version
    -h, --help       Displays this message
```

## Arguments

- **`<config>`**: a string path to a config file (a package.json file)
- **`<path>`**: a string path to the desired destination of the installed dependencies

## Added Specificity Options

Within a config (`package.json`) an `installDepedencies` object can optionally be added. It can optionally include an `ignore` array or an `include` object.

```json
"installDependencies": {
    "include": {
      "react": "17.0.1",
      "@babel/core": "7.12.10",
      "typescript": "4.1.2"
      "@foo/bar": "@latest"
    },
    "ignore": [
      "ramda"
    ]
  }
```

## Why

When using various project managers for monorepos, like [yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) and [lerna](https://github.com/lerna/lerna), there are drawbacks in the Developer Experience (DX) versus deployment experience of module installation.

By manually providing a way to specifically install packages (node_modules) to a specified location, developors can enjoy [module hoisting](https://classic.yarnpkg.com/en/docs/workspaces/#toc-limitations-caveats) and [local package referencing](https://github.com/lerna/lerna/blob/main/utils/check-working-tree/package.json#L33) and **not** have to worry about what's in `node_modules` folders when deploying un-bundled node apps.

## Benefits

Listed below are a few benefits to using **install-dependencies**.

- Developer Experience (DX)
- Build deploys sizes
- Build deploys build times
- Deployment package security
- Deployment package debugging
- Deployment package versions

## Use Case

Consider the following paragraph to decide whether **install-dependencies** can assist your project!

### Deployment node app woos

Deploying a node app with it's corresponding `node_modules` produces a large build artifact! Now imagine a monorepo which has multiple node apps and uses a yarn workspaces. [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) greatly help with developer experience by hoisting `node_modules`. However, when building a build artifact for deployment, those same gains from [Yarn Workspace Hoisting](https://classic.yarnpkg.com/en/docs/workspaces/) will product a **large** `node_module` directory! On top of that, an extra build step may be required for including [local package dependencies](https://github.com/lerna/lerna/blob/main/utils/check-working-tree/package.json#L33) (`"@foo/bar": "file:../packages/bar/dist"`). The results of this scenerio are build artifacts that are too big to be deployed and long cumbersome build times while waiting for a node app's local dependencies to build. Furthermore, dependencies specified in the node app's `package.json`'s dependencies may be different based on hoisting.

**install-dependencies** to the rescue! By using **install-dependencies**, we can specify exactly what dependencies must be installed!

### How installing dependencies helps

Here's a short list of how **install-dependencies** helps!

- **install-dependencies** installs all dependencies specific to a config (a `package.json`)'s dependencies.
- **install-dependencies** will optionally ignore dependencies specified in a config (a `package.json`)'s `installDependencies.ignore` array.
- **install-dependencies** will optionally override dependencies or add dependencies specified in a config (a `package.json`)'s `installDependencies.include` object.

Here's an example output of a config (`package.json`) can look if all scenerios listed above are used:

```json
"dependencies": {
  "@foo/bar": "file:..packages/bar/dist",
    "ramda": "0.27.1",
    "typescript": "4.1.3",
    "ink": "^3.0.8",
  },
  "installDependencies": {
    "include": {
      "react": "17.0.1",
      "@babel/core": "7.12.10",
      "typescript": "4.1.2"
      "@foo/bar": "@latest"
    },
    "ignore": [
      "ramda"
    ]
  }
```

The resulting `node_modules` directory will include:

```txt
// note: NO ramda!
@babel/core@7.12.10
@foo/bar@0.1.2 // note: example which equals the latest version of @foo/bar
ink@^3.0.8
react@17.0.1
typescript@4.1.2 // note: NOT 4.1.3
```

---

## Monorepo Utilities 🧱

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

View other [monorepo utilities](../../).

```

```
