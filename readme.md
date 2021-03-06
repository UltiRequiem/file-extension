# Get File Extension

[![Code Coverage](https://codecov.io/gh/ultirequiem/file-extension/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/file-extension)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/file_extension/mod.ts)

Get the extension of a file.

> Ported from [Browserify](https://github.com/browserify/path-browserify) ❤

## Usage

The API is the same on all this platforms ✔️

### [Deno 🦕](https://deno.land/x/file_extension)

```javascript
import { extname } from "https://deno.land/x/file_extension/mod.ts";

extname("main.py"); // .py

extname({ path: "App.js", leadingPeriod: true }); // .js

extname({ path: "mod.ts", leadingPeriod: false }); // ts
```

> If you only support Deno you should use
> [std/path#extname](https://deno.land/std/path#extname) instead.

### [Node.js 🐢🚀](https://npmjs.com/package/@ultirequiem/file-extension)

```javascript
import { extname } from "@ultirequiem/file-extension";
```

> If you only support Node.js you should use
> [path#extname](https://nodejs.org/api/path.html#pathextnamepath) instead.

### [Browser 🌐](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg 👉
[ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) ↔️
[SkyPack](https://cdn.skypack.dev/@ultirequiem/file-extension) 🆚
[Script Tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
↔️ [JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/file-extension)

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/file_extension/mod.ts) 📄

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/file_extension/tags) 🏷️

## Licence

Licensed under the MIT License 📄
