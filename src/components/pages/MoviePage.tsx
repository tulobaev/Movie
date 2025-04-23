import { FC } from "react";
import scss from "./MoviePage.module.scss";
const MoviePage: FC = () => {
  return (
    <div id={scss.MoviePage}>
      <div className="container">
        <div className={scss.content}>MoviePage</div>
      </div>
    </div>
  );
};
export default MoviePage;
