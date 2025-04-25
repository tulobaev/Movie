import { FC } from "react";
import scss from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Footer: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div onClick={() => navigate("/")} className={scss.logo}>
            <BiSolidCameraMovie className={scss.icon_movie} />
            <h1>Movie Zone</h1>
          </div>
          <p>Мы рады что выбираете нас!</p>
          <div className={scss.icons}>
            <FaInstagram />
            <FaTelegramPlane />
            <FaGithub />
          </div>
        </div>
        <div className={scss.mini_footer}>
          <p>tulobaevtalgat@gmail.com </p>
          <p className={scss.line}>
            --------------------------------------------------
          </p>
          <p>099958872876642</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
