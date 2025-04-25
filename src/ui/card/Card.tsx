import { FC } from "react";
import scss from "./Card.module.scss";

interface IProps {
  title: string | undefined;
  image: string;
  year: number;
  rating: number;
  onClick?: () => void;
}

const Card: FC<IProps> = ({ title, image, year, rating, onClick }) => {
  return (
    <div className={scss.card} onClick={onClick}>
      <div className={scss.cardInner}>
        <img src={image} alt={title} loading="lazy" />
        <div className={scss.cardOverlay}>
          <h4>{title}</h4>
          <p>{year}</p>
          <p>★ {rating.toFixed(1)}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
