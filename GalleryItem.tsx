
type Props = {
  file: string;
};

export const isImage = (file: string) => file.endsWith('.jpg') || file.endsWith('.png');
export const isVideo = (file: string) => file.endsWith('.mp4');
export const isValidFile = (file: string) => {
  return file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.mp4');
};

const GalleryItem = ({ file }: Props) => {
  if (!isValidFile(file)) return null;

  return (
    <div className='gallery-item'>
      {isImage(file) && (
        <img src={file} alt={file} />
      )}

      {isVideo(file) && (
        <video controls>
          <source src={file} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default GalleryItem;