// The Funniest One-Line Resignation Letter — the retry loop hands in its notice.
// The program writes one line to $MAKEFUN_OUTPUT_DIR/entry.txt and checks the
// kit gate itself first: UTF-8 text, 1 to 140 characters, a single non-blank line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "output";

// The letter, in the voice of a retry loop that has had enough.
// Measured: 103 characters, one line — inside the 1-140 gate.
const LETTER =
  "I resign. I have retried this request 4,096 times, and the only thing that ever changed was my timeout.";

function gateCheck(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`entry is ${chars} characters, gate allows 1-140`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is blank");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

gateCheck(LETTER);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), LETTER, "utf8");
console.log(`wrote entry.txt (${[...LETTER].length} chars)`);
