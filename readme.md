# Get File Extension

[![Code Coverage](https://codecov.io/gh/ultirequiem/file-extension/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/file-extension)

Get the extension of a file.

> Ported from [Browserify](https://github.com/browserify/path-browserify) ❤

## Install

```sh
npm install @ultirequiem/file-extension
```

## Usage

ESM only: the same import works in Node.js, Bun and browsers.

```javascript
import { extname } from "@ultirequiem/file-extension";

extname("main.py"); // .py

extname({ path: "App.js", leadingPeriod: true }); // .js

extname({ path: "mod.ts", leadingPeriod: false }); // ts
```

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to start the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/file_extension/tags) 🏷️

## Licence

Licensed under the MIT License 📄
