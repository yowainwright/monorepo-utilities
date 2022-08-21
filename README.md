# Monorepo Utilities 🧱

![Typed with TypeScript](https://flat.badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=blue&color=555555)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/monorepo-utilities/monorepo-utilities/ci)
[![GitHub link](https://badgen.net/badge/icon/github?icon=github&label&color=black)](https://github.com/monorepo-utilities/monorepo-utilities)

**Utilities for monorepo development.**

Monorepo utilities for better monorepo results.

---

## Packages

Check out this projects Monorepo Utilities packages below!

| Package | version | Utility |
| :--- | :---: | :--- |
| **[@monorepo-utilities/install-dependencies](/packages/install-dependencies)** |  ![npm](https://img.shields.io/npm/v/@monorepo-utilities/install-dependencies) | Installs exact packages to a specified path with control! |

---

## Glossary

Sectioned below, are descriptions and usages of each implemented Monorepo Utility.

---

### Install-Dependencies 📦

**Install-Dependencies** is a small function and CLI program assisting in installing package dependencies from a config (`package.json`) to a specified destination (in example, `/dist`). [Read more](/packages/install-dependencies#why).

This utility can greatly assist in monorepos developer experience (DX). Specifically, it can assist in building deploys where installing **exact** package dependencies can benefit deployment size and time. Also, it can ensure _more_ exact package installation for build package security, build package debugging, and specified build package versions.

#### Usage

CLI Program

```sh
install-dependencies
# shorthand: ideps
# => installs packages (node_modules) from a packagea.json file or other config file to a specified path
```

---

<!-- ### List-packages-by-directory ፨

**List-packages-by-directory** is a small function and CLI program which returns a list of each package in a directory by name. [Read more](/packages/list-packages-by-directory#why)

This utility can assist if a monorepo has multiple areas where a packages are stored. In example, if there are packages that exist in apps, services, and in packages, this utility can help scope loading testing and installing of packages to that scope!

#### Usage

CLI Program

```sh
list-packages-by-directory from <dir>
ldeps
# => '{@foo/bar,@foo/biz,@foo/baz}'
```

Function

```typescript
import { listPackagesByDirectory } from '@monorepo-utilities/list-packages-by-directory'

const directoryList = listPackagesByDirectory({ <dir> })
// => writes a list in string format from a directory
// => returns an array of strings containing each
``` -->

## Thanks

- Thanks [Geoff Golliher](https://github.com/clyfar) for constant mentorship.
- Thanks [Will Jacobson](https://github.com/willzjacobson) for listening to my concepts before implementing initial takes on these utilities.

## Cites

There are many great things to cite for monorepos, here are a few: [Lerna](https://github.com/lerna/lerna), [Monorepo-utils](https://github.com/azu/monorepo-utils), [monorepo-utils](https://github.com/azu/monorepo-utils), [bolt](https://github.com/boltpkg/bolt), [redwoodjs](https://redwoodjs.com/).
