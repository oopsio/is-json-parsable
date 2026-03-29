import { readFileSync } from "node:fs";

const inputFile = "./index.d.ts";
const outputFile = "./dist/index.d.ts";
function minifyDts() {
  const dtsCode = readFileSync(inputFile, "utf8");
  const minified = dtsCode
    .replace(/\/\*\*[\s\S]*?\*\/|\/\/.*/g, "") // Remove all comments
    .replace(/\s+/g, " ") // Collapse whitespace
    .trim(); // Remove outer padding
  console.log(`Successfully minified types to ${outputFile}`);
}
minifyDts();
