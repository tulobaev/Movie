import React from "react";
import { IoClose } from "react-icons/io5";
import scss from "./Trailer.module.scss";

interface TrailerProps {
  trailerKey: string;
  isOpen: boolean;
  onClose: () => void;
}

const Trailer: React.FC<TrailerProps> = ({ trailerKey, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={scss.trailer_overlay} onClick={onClose}>
      <div className={scss.trailer_modal} onClick={(e) => e.stopPropagation()}>
        <button className={scss.trailer_close} onClick={onClose}>
          <IoClose size={30} />
        </button>
        <h2>Трейлер</h2>
        <div className={scss.trailer_iframe}>
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="Трейлер фильма"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Trailer;
