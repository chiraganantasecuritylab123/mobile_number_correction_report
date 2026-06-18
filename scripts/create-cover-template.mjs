import sharp from "sharp";

const rows = [
  { top: 306, height: 26 },
  { top: 338, height: 26 },
  { top: 370, height: 26 },
  { top: 402, height: 26 },
  { top: 434, height: 26 },
  { top: 466, height: 26 },
  { top: 498, height: 26 },
];

const composites = rows.map((row) => ({
  input: Buffer.from(
    `<svg width="310" height="${row.height}"><rect width="310" height="${row.height}" fill="#FDF5E6"/></svg>`,
  ),
  left: 385,
  top: row.top,
}));

await sharp("public/cover/reference-cover.png")
  .composite(composites)
  .toFile("public/cover/cover-template.png");

console.log("cover-template.png created");
