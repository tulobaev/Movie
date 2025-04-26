import { FC } from "react";
import scss from "./Card.module.scss";

interface IProps {
  title?: string;
  image: string;
  year: number | string;
  rating: number | string;
  onClick?: () => void;
}

const Card: FC<IProps> = ({ title, image, year, rating, onClick }) => {
  const formattedRating =
    typeof rating === "number"
      ? rating.toFixed(1)
      : typeof rating === "string" && !isNaN(parseFloat(rating))
      ? parseFloat(rating).toFixed(1)
      : "N/A";

  const isFallbackImage = image === "/fallback.jpg";

  return (
    <div className={scss.card} onClick={onClick}>
      <div className={scss.cardInner}>
        <img src={image} alt={title} loading="lazy" />

        {isFallbackImage && (
          <div className={scss.noImageOverlay}>
            <p>Нет изображения</p>
          </div>
        )}

        <div className={scss.cardOverlay}>
          <h4>{title}</h4>
          <p>{year}</p>
          <p>★ {formattedRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
