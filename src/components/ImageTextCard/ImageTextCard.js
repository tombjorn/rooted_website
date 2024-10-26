import React from "react";
import style from './ImageTextCard.module.css';

const ImageTextCard = ({ title, content, image, flip, background}) => {
    return (
      <div className={`${style.ImageTextCard} ${flip ? style.Flipped : ''} ${background ? style.Background1 : style.Background2}`}>
        <div className={style.ImageTextCardText}>
          <h2 className={style.ImageTextCardTitle}>{title}</h2>
          <p className={style.ImageTextCardContent}>{content}</p>
        </div>
        <img className={style.ImageTextCardImage} alt='CardImage' src={image} />
      </div>
    );
};

export default ImageTextCard;
