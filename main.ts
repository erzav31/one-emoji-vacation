// One Emoji, One Dream Vacation — entry program.
//
// The emoji is the campsite: a tent pitched where the road ends and the
// stars begin. No beach, no resort, no crowd — one night under an open sky
// is the whole dream, and the tent says it in a single picture.
// The program writes exactly that one emoji to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// A single emoji for the dream vacation: camping under the stars,
// far from everything, with nothing booked and nothing to prove.
const EMOJI = "🏕️";

// The gate allows 1–8 characters: refuse to write anything that would
// fail it, so a bad edit can never ship an invalid entry.
if ([...EMOJI].length < 1 || [...EMOJI].length > 8 || /\s/.test(EMOJI)) {
  throw new Error(`invalid entry emoji: ${JSON.stringify(EMOJI)}`);
}

function main(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, EMOJI, "utf8");
}

main();
