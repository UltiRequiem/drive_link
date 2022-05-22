import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.15/node.ts";

buildPackage({
  repoName: "drive_link",
  name: "@ultirequiem/drive-link",
  description:
    "Generate a Google Drive direct download link based on the URL or ID.",
  homepage: "https://ulti.js.org/drive_link",
  keywords: ["drive", "google"],
  license: "MIT",
  version: "1.0.0",
});
