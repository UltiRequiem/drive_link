# Drive Link

[![Code Coverage](https://codecov.io/gh/UltiRequiem/drive_link/branch/main/graph/badge.svg)](https://codecov.io/gh/UltiRequiem/drive_link)
[![Deno Doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/drive_link/mod.ts)

Generate a [Google Drive](https://google.com/drive) direct download link based
on the URL or ID.

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

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/UltiRequiem) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🙏

Don't forget to start the repo ⭐

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
