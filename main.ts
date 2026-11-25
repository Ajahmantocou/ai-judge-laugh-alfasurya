// Make the AI Judge Laugh — make.fun bounty
// u-alfasurya91-make-the-ai-judge-laugh-6ed40225
//
// Writes one original joke about office life (one line, under 200
// characters) to /output/entry.txt.
//
// Deterministic: no network, no randomness, no input files. Running this
// program twice produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const JOKE =
  "I asked the office printer for one page and it gave me a paper jam, a low-toner warning, and a performance review.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JOKE + "\n", "utf8");
