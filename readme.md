# Drive Link

[![npm](https://img.shields.io/npm/v/@ultirequiem/drive-link?logo=npm&color=cb3837)](https://www.npmjs.com/package/@ultirequiem/drive-link)
[![npm downloads](https://img.shields.io/npm/dm/@ultirequiem/drive-link?color=cb3837)](https://www.npmjs.com/package/@ultirequiem/drive-link)
[![CI](https://github.com/UltiRequiem/drive_link/actions/workflows/ci.yaml/badge.svg)](https://github.com/UltiRequiem/drive_link/actions/workflows/ci.yaml)
[![codecov](https://codecov.io/gh/UltiRequiem/drive_link/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/drive_link)

Generate a [Google Drive](https://google.com/drive) direct download link based
on the URL or ID.

## Install

```sh
npm install @ultirequiem/drive-link
```

## Usage

```javascript
import { driveLink } from "https://deno.land/x/drive_link/mod.ts";

driveLink(
  "https://drive.google.com/file/d/1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh/view?usp=sharing",
);
//=> "https://drive.google.com/uc?export=download&id=1DvRH-yk1z0HVBK-EmiQeJ_VVh5eHwQXh"
```

> Check [platforms](./platforms.md) for other runtime options.

## Documentation

Is hosted on
[Deno Doc](https://doc.deno.land/https://deno.land/x/drive_link/mod.ts) 📄

## Support

Open an Issue, I will check it as soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Don't forget to star the repo ⭐

## Authors

[Eliaz Bobadilla](https://ultirequiem.com) - Creator and Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/drive_link/contributors) who
participated in this project ✨

## Versioning

We use [Semantic Versioning](http://semver.org). For the versions available, see
the [tags](https://github.com/UltiRequiem/drive_link/tags) 🏷️

## Licence

Licensed under the MIT License 📄
