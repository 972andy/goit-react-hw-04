import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={style.list}>
      {images !== null &&
        images.map((item) => {
          return (
            <li key={item.id} className={style.listItem}>
              <ImageCard item={item} onClick={() => onImageClick(item)} /> {/* Додаємо обробник натискання */}
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;