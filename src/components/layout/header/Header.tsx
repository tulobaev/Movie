import { FC } from "react";
import scss from "./Header.module.scss";
import { links } from "../../../constants/Links";
import { Link } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <BiSolidCameraMovie className={scss.icon_movie} />
            <h1>Movie Zone</h1>
          </div>
          <div className={scss.nav}>
            <div className={scss.search}>
              <IoSearchSharp className={scss.icon_search} />
              <input type="search" />
            </div>
            {links.map((item, index) => (
              <Link key={index} to={item.link}>
                <p className={scss.title}>{item.title}</p>
              </Link>
            ))}
            <AiOutlineMenuUnfold className={scss.burger_menu} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
