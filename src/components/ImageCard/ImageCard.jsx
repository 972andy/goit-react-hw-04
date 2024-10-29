import React from 'react';
import style from './ImageCard.module.css';

const ImageCard = ({ item, onClick }) => {
  return (
    <div className={style.container} onClick={onClick}> 
      <img className={style.image} src={item.urls.small} alt={item.alt_description} />
      <p>Likes: {item.likes} </p>
    </div>
  );
};

export default ImageCard;