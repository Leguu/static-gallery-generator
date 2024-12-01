import { readdir } from "node:fs/promises";
import { renderToString } from "react-dom/server";
import Gallery from './Gallery';
import { isValidFile } from './GalleryItem';

const files = await readdir('.');
const validFiles = files.filter(isValidFile);

if (!validFiles.length) {
  console.log('ERROR: No valid files found');
  process.exit(1);
}

const styles = `
body {
  font-family: Arial, sans-serif;
  background-color: #151515;
  color: white;
  margin: 0;
  padding: 4rem;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.gallery-item img {
  max-width: 25rem;
  width: 100%;
}
.gallery-item video {
  max-width: 25rem;
  width: 100%;
}
.gallery-item .video-container {
  margin-top: 2rem;
}

@media (max-width: 950px) {
  body {
    padding: 2rem;
  }

  .gallery-item img {
    max-width: 100%;
  }
}
`;

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