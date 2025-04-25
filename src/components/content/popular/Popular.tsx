import { FC, useEffect, useRef, useState } from "react";
import scss from "./Popular.module.scss";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../store/Store";
import { setData } from "../../../store/slice/DataSlice";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import Card from "../../../ui/card/Card";
import { useNavigate } from "react-router-dom";
import Buttons from "../../../ui/buttonCategory/Buttons";

const API_KEY = import.meta.env.VITE_KEY;
const API = import.meta.env.VITE_API;

const Popular: FC = () => {
  const { data } = useAppSelector((store) => store.data);
  const dispatch = useAppDispatch();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [type, setType] = useState("movie");
  const navigate = useNavigate();

  async function fetchProduct() {
    try {
      const url = `${API}${type}/popular?api_key=${API_KEY}&language=ru-US&page=1`;
      const { data } = await axios.get(url);
      dispatch(setData(data.results));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!type) return;
    fetchProduct();
  }, [type]);

  //! scroll funciton
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      setShowLeftButton(scrollRef.current.scrollLeft > 10);
      const isAtEnd =
        scrollRef.current.scrollWidth - scrollRef.current.scrollLeft <=
        scrollRef.current.clientWidth + 10;
      setShowRightButton(!isAtEnd);
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, [data]);
  const scrollLeft = () => {
    if (scrollRef.current) {
      const cardWidth = 290;
      scrollRef.current.scrollBy({ left: -cardWidth * 2, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      const cardWidth = 290;
      scrollRef.current.scrollBy({ left: cardWidth * 2, behavior: "smooth" });
    }
  };
  //!
  const firstTen = data.slice(0, 11).reverse();

  return (
    <section className={scss.Poppular}>
      <div className={scss.content}>
        <div className={scss.title}>
          <h3>Popular</h3>
          <Buttons type={type} setType={setType} />
        </div>
        <div className={scss.scrollContainer}>
          {showLeftButton && (
            <BsArrowLeftCircle
              onClick={scrollLeft}
              aria-label="Scroll left"
              className={`${scss.scrollButton} ${scss.scrollButtonLeft}`}
            />
          )}

          <div className={scss.scrollWrapper} ref={scrollRef}>
            <div className={scss.cardsContainer}>
              {firstTen.map((item) => (
                <Card
                  key={item.id}
                  title={item.title || item.name}
                  image={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                      : "/fallback.jpg"
                  }
                  year={new Date(
                    item.release_date || item.first_air_date
                  ).getFullYear()}
                  rating={item.vote_average}
                  onClick={() => navigate(`/details/${item.id}`)}
                />
              ))}
            </div>
          </div>

          {showRightButton && (
            <BsArrowRightCircle
              onClick={scrollRight}
              className={`${scss.scrollButton} ${scss.scrollButtonRight}`}
              aria-label="Scroll right"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Popular;
