import { FC, useEffect, useState } from "react";
import scss from "./Header.module.scss";
import { links } from "../../../constants/Links";
import { NavLink, useNavigate } from "react-router-dom";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const API_KEY = import.meta.env.VITE_KEY;
const API = import.meta.env.VITE_API;

const Header: FC = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = async (value: string) => {
    if (value.trim() === "") return;
    try {
      const { data } = await axios.get(
        `${API}search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          value
        )}`
      );
      navigate(`/search/${value}`, { state: { product: data.results } });
      setSearchValue("");
    } catch (error: any) {
      console.error("Error searching for movies:", error.message);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            onClick={() => navigate("/")}
            className={scss.logo}
          >
            <BiSolidCameraMovie className={scss.icon_movie} />
            <h1>Movie Zone</h1>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className={scss.nav}
          >
            <div className={scss.search}>
              <IoSearchSharp className={scss.icon_search} />
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch(searchValue);
                  }
                }}
                type="search"
                placeholder="Search Movie"
              />
            </div>
            {links.map((item, index) => (
              <NavLink
                className={({ isActive }) =>
                  `${scss.title} ${isActive ? scss.active : ""}`
                }
                key={index}
                to={item.link}
              >
                {item.title}
              </NavLink>
            ))}
            {isMenuOpen ? (
              <AiOutlineClose
                className={scss.burger_menu}
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <AiOutlineMenuUnfold
                className={scss.burger_menu}
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>
          {isMenuOpen && (
            <div className={scss.mobile_menu}>
              {links.map((item, index) => (
                <NavLink
                  className={({ isActive }) =>
                    `${scss.title} ${isActive ? scss.active : ""}`
                  }
                  key={index}
                  to={item.link}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
