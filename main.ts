import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One pickup line, spoken by the vending machine itself: its coil, its
// buttons, its exact change — with the punch landing on the last word.
const LINE =
  "Hey — no exact change required: my coil's been stuck on you all day, so press B4 and I'll drop everything. Literally.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, { encoding: "utf8", mode: 0o644 });
chmodSync("/output/entry.txt", 0o644);
