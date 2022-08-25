# @monorepo-utilities/install-dependencies 🧱 📦

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![npm version](https://badge.fury.io/js/%40monorepo-utilities%2Finstall-dependencies.svg)](https://www.npmjs.com/package/@monorepo-utilities/install-dependencies)

Install Dependencies is CLI which helps you install monorepo package dependencies with control!

## Why tho?

When working in monorepo workspace, like [pnpm workspaces](https://pnpm.io/workspaces), installing exact node_modules within a package can be difficult. With `install-dependencies`, developers can enjoy [local package referencing](https://pnpm.io/workspaces#workspace-protocol-workspace) and **exact** `node_module` installs!

---

## Install

```sh
pnpm install @monorepo-utilities/install-dependencies
```

## Usage

To use install-dependencies, simply run `install-deps`.

Or, if you need more control, use the options below!

```sh
Usage: install-deps [options]

Options:
  -V, --version          output the version number
  -c, --config <config>  config path
  --debug                enables debug mode
  -d, --dest <string>    dest path
  -f, --file <file>      path to package.json file
  --has-lockfile         use lock file
  --isTesting            enables testing, no scripts are run
  -r, --runner <runner>  npm, pnpm, or yarn
  -h, --help             display help for command
```

---

### Optional Specificity

If you want even more control, within a `package.json`, you can add `installDependencies` or `ideps` object.
Now, you can optionally add packages to ignore using an `ignore` array or you can include more using `include` object!

If you'd prefer this functionality without adding `installDependencies` or `ideps` to `package.json`, you can add an `ignore` array or an `include` object to a `.idepsrc` config at the root of your package.

```ts
// within package.json
"installDependencies": {
  "include": {
    "react": "17.0.1",
    "@babel/core": "7.12.10",
    "typescript": "4.1.2"
  },
  "ignore": [
    "ramda"
  ]
}
```

Within a `.idepsrc`

```ts
{
  "include": {
    "react": "17.0.1",
    "@babel/core": "7.12.10",
    "typescript": "4.1.2"
  },
  "ignore": [
    "ramda"
  ]
}
```

---

## Monorepo Utilities 🧱

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

View other [monorepo utilities](../../).
