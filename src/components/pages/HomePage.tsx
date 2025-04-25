import { FC, useEffect, useState } from "react";
import scss from "./HomePage.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import axios from "axios";
import { setData } from "../../store/slice/DataSlice";
import Button from "../../ui/button/Button";
import { useNavigate } from "react-router-dom";
import Content from "../content/Content";

const API_KEY = import.meta.env.VITE_KEY;
const API = import.meta.env.VITE_API;

const HomePage: FC = () => {
  const [backgrounds, setBackgrounds] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { data } = useAppSelector((store) => store.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function fetchProduct() {
    try {
      const url = `${API}movie/popular?api_key=${API_KEY}&language=ru-US&page=1`;
      const { data } = await axios.get(url);
      dispatch(setData(data.results));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    const lastFive = data.slice(-5).reverse();
    const images = lastFive
      .map(
        (item) => item.backdrop_path && `${IMAGE_BASE_URL}${item.backdrop_path}`
      )
      .filter(Boolean);
    setBackgrounds(images);
  }, [data]);

  useEffect(() => {
    if (backgrounds.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds]);

  const lastFive = data.slice(-5).reverse();
  const currentItem = lastFive[currentIndex] || {};

  return (
    <>
      <section
        className={scss.HomePage}
        style={{
          backgroundImage: backgrounds.length
            ? `url(${backgrounds[currentIndex]})`
            : "none",
          transition: "background-image 0.5s ease",
        }}
      >
        <div className="container">
          <div className={scss.content}>
            <div className={scss.text}>
              <h1>{currentItem.title || currentItem.name}</h1>
              <p>
                {currentItem.overview
                  ? currentItem.overview
                  : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est veritatis voluptas magni voluptatem aperiam repellendus minima itaque nisi numquam corrupti quos unde quod rem laudantium sit cupiditate, quis officiis odio"}
              </p>
              {currentItem.release_date ? (
                <span>Дата Выпуска: {currentItem.release_date}</span>
              ) : (
                ""
              )}
              <div onClick={() => navigate(`/details/${currentItem.id}`)}>
                <Button title={"See More"} />
              </div>
            </div>
            <div className={scss.image}>
              <img
                src={`https://image.tmdb.org/t/p/original${currentItem.poster_path}`}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <Content />
    </>
  );
};

export default HomePage;
