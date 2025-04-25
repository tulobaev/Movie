import { FC } from "react";
import scss from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <h1>LOGO</h1>
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
