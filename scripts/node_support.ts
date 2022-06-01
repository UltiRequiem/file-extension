import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.15/node_support.ts";

buildPackage(
  {
    repoName: "file_extension",
    description: "Get the file extension of a file.",
    homepage: "https://file-extension.js.org",
    keywords: ["extension", "file"],
    version: "3.0.0",
  },
);
