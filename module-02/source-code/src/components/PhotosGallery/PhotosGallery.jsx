import { PhotosGalleryItem } from 'components';
import style from './PhotosGallery.module.css';

export const PhotosGallery = ({ photos }) => {
  return (
    <ul className={style.list}>
      {photos.map(({ id, avg_color, alt, src }) => (
        <PhotosGalleryItem key={id} avg_color={avg_color} alt={alt} src={src} />
      ))}
    </ul>
  );
};
