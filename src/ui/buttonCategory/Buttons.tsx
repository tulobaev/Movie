import { FC } from "react";
import scss from "./Buttons.module.scss";

interface IProps {
  type: string;
  setType: (value: string) => void;
}

const Buttons: FC<IProps> = ({ type, setType }) => {
  return (
    <div className={scss.btnBox}>
      <button
        onClick={() => setType("movie")}
        className={type === "movie" ? scss.active : ""}
      >
        Movie
      </button>
      <button
        onClick={() => setType("tv")}
        className={type === "tv" ? scss.active : ""}
      >
        TV Show
      </button>
    </div>
  );
};

export default Buttons;
