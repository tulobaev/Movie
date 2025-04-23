import { FC } from "react";
import scss from "./Header.module.scss";
import { links } from "../../../constants/Links";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <h1>LOGO</h1>
          </div>
          <div className={scss.nav}>
            {links.map((item, index) => (
              <Link key={index} to={item.link}>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
