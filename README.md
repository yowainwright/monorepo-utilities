# Monorepo Utilities 🧱

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

---

[Packages](#packages) | [Glossary](#glossary) | [Cites](#cites)

---

## Packages

| Package                                                                | Utility                       |
| ---------------------------------------------------------------------- | ----------------------------- |
| [@monorepo-utilities/build-node-modules](/packages/build-node-modules) | build node_modules directories with control |

---

## Glossary

Below are sectioned descriptions and usages of each implemented Monorepo Utility.

[build-node-modules](#build-node-modules-)
---

### Build Node Modules

**[Build Node Modules](/packages/build-node-modules)** is a function which assists in building a perfect node_module directory for dist.

#### Usage

```javascript
build-node-modules <package.json> 
// => generate magic 🪄
```

#### Why

Often, either when installing a bunch of packages using `npm i` for each monorepo package, or when trouble shooting [yarn workspaces hoisting](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/), it would be easier to declaritavely build the node_modules directory you want with control. This is what **Build Node Modules** does.

---

## Cites

There are many great things to cite for monorepos, here are a few: [Lerna](https://github.com/lerna/lerna), [Monorepo-utils](https://github.com/azu/monorepo-utils). 
