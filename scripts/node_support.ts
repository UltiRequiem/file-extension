import { buildPackage } from "https://deno.land/x/ultirequiem@0.0.12/node_support.ts";

buildPackage(
  {
    repoName: "file_extension",
    description: "Get the file extension of a file.",
    homepage: "https://camelcase.js.org",
    keywords: ["extension", "file"],
    version: "2.0.0",
  },
);
