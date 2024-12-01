import type React from 'react';
import GalleryItem, { isImage, isVideo } from './GalleryItem';

type Props = {
  files: string[];
};

const Gallery: React.FC<Props> = ({ files }) => {
  const videos = files.filter(isVideo);
  const images = files.filter(isImage);

  return (
    <div>
      <h1>Media Gallery</h1>

      <div className='gallery'>
        {images.map(file => (
          <GalleryItem key={file} file={file} />
        ))}
      </div>

      {videos.length > 0 && <>
        <h2>Video</h2>

        <div className='gallery'>
          {videos.map(file => (
            <GalleryItem key={file} file={file} />
          ))}
        </div>
      </>}
    </div>
  );
};

export default Gallery;