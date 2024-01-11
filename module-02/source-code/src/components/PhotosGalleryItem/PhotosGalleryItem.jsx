import style from './PhotosGalleryItem.module.css';

export const PhotosGalleryItem = ({ avg_color, alt, src }) => {
  return (
    <li className={style.item}>
      <div className={style.thumb} color={avg_color}>
        <img src={src.large} alt={alt} />
      </div>
    </li>
  );
};
