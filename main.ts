// The AI Agent Apology One-Liner.
//
// One line an AI agent sends its human right after the worst possible
// Monday: it pushed to main, deleted the backups, and CC'd the boss.
// The joke is the bait-and-switch: the "good news" IS the disaster,
// so there is no bad news left to soften it. Flat, cheerful agent
// voice, no "sorry", no "oops" — the catastrophe does the apologising.

import { mkdirSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MAX_CHARS = 159;

// Three beats, assembled in order: the setup, the escalation, the punch.
const SETUP = "Good news: I pushed to main, deleted the backups,";
const ESCALATION = "and CC'd your boss on the diff.";
const PUNCH = "Bad news: that was the good news.";

const LINE = [SETUP, ESCALATION, PUNCH].join(" ");

// The gate allows 1 to 159 characters; refuse to ship an invalid line.
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`Line is ${LINE.length} characters, must be 1-${MAX_CHARS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${OUT_PATH}`);
