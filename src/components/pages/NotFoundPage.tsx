import { Link } from "react-router-dom";
import scss from "./NotFoundPage.module.scss"; // подключаешь SCSS файл

const NotFoundPage = () => {
  return (
    <div id={scss.not}>
      <div className={scss.not_found_page}>
        <h1>404</h1>
        <p>Страница не найдена</p>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
