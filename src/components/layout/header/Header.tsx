import { FC } from "react";
import scss from "./Header.module.scss";
import { links } from "../../../constants/Links";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div>logo</div>
          {links.map((item, index) => (
            <Link key={index} to={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Header;
