# Monorepo Utilities 🧱

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

**Utilities for monorepo development.**

Javascript utilities for better monorepo results.

The goal here is to make the goal there more attainable.

---

[Packages](#packages) | [Glossary](#glossary) | [Cites](#cites)

---

## Packages

| Package                                                                    | Utility                                     |
| -------------------------------------------------------------------------- | ------------------------------------------- |
| [@monorepo-utilities/install-dependencies](/packages/install-dependencies) | installs `node_modules` to a specified path |

---

## Glossary

Below are sectioned descriptions and usages of each implemented Monorepo Utility.

[Install Dependencies](#install-dependencies)

---

### Install Dependencies

**[Install Dependencies](/packages/install-dependencies) 📦** is a function which assists in building dependencies (`node_modules`) to a specified path.

#### Usage

```javascript
install-dependencies <path>
// => installs <node_modules> to a specified path
```

### Why

When using various project managers for monorepos, like yarn workspaces and lerna, there are drawbacks in the DX (Developer Experience) versus deployment experience of module installation.
By manually providing a way to specifically install `node_modules` to a specified location, developors can enjoy module hoisting and local package referencing and **not** have to worry about what's in `node_modules` folders when deploying un-bundled node apps.

---

## Cites

There are many great things to cite for monorepos, here are a few: [Lerna](https://github.com/lerna/lerna), [Monorepo-utils](https://github.com/azu/monorepo-utils).
