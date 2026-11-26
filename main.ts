// The Internet in One Word — entry program.
// Writes a single word summing up the whole internet to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "doomscroll";

// Gate: entry.txt must be UTF-8 text of 1 to 30 characters, exactly one word.
const chars = [...WORD].length;
if (chars < 1 || chars > 30) throw new Error(`word is ${chars} chars, gate needs 1-30`);
if (WORD.trim().split(/\s+/).length !== 1) throw new Error("entry must be exactly one word");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD + "\n", "utf8");
