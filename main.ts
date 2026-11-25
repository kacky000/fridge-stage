// Writes the entry: one sentence, at most 200 characters, about a small moment of everyday wonder.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = "When I open the fridge at midnight, the light comes up like a tiny stage, and the leftovers all look caught mid-rehearsal.";
const limit = 200;
if ([...line].length > limit) throw new Error(`entry is ${[...line].length} characters, over ${limit}`);
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
