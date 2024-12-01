import { readdir } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import Gallery from './Gallery';
import { isValidFile } from './GalleryItem';
import stylesFile from "./styles.css" with { type: "file" };

const files = await readdir('.');
const validFiles = files.filter(isValidFile);

if (!validFiles.length) {
  console.log('ERROR: No valid files found');
  process.exit(1);
}

const styles = await Bun.file(stylesFile).text();

const output = renderToString(
  <html>
    <head>
      <title>Gallery</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <style>{styles}</style>
    </head>
    <body>
      <Gallery files={files} />
    </body>
  </html>
);

console.log(output);