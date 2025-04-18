import { FC, useEffect, useState } from "react";
import scss from "./HomePage.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import { setData } from "../../store/slice/DataSlice";
import { fetchTopRated } from "../../api/tv/Tv";
import { fetchPopular } from "../../api/movie/Movie";

const HomePage: FC = () => {
  const { data } = useAppSelector((store) => store.data);
  const dispatch = useAppDispatch();
  const [popularType, setPopularType] = useState<"movie" | "tv">("movie");
  const [topRatedType, setTopRatedType] = useState<"movie" | "tv">("tv");

  console.log(data);

  useEffect(() => {
    const loadData = async () => {
      const topRated = await fetchTopRated(topRatedType);
      const popular = await fetchPopular(popularType);
      dispatch(setData({ popular, topRated }));
    };
    loadData();
  }, [popularType, topRatedType, dispatch]);

  return (
    <section className={scss.HomePage}>
      <div className="container">
        <div className={scss.content}>
          <h1>rated</h1>
          <select
            onChange={(e) => setTopRatedType(e.target.value as "movie" | "tv")}
            name=""
            id=""
          >
            <option value="movie">Movie</option>
            <option value="tv">Tv</option>
          </select>

          <div>
            {data.topRated?.map((item, index) => (
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    item.poster_path || item.backdrop_path
                  }`}
                  alt={item.name || item.title}
                />
              </div>
            ))}
          </div>

          <hr />
          <h1>popular</h1>
          <select
            onChange={(e) => setPopularType(e.target.value as "movie" | "tv")}
            name=""
            id=""
          >
            <option value="movie">Movie</option>
            <option value="tv">Tv</option>
          </select>

          <div>
            {data.popular?.map((item, index) => (
              <div key={index}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${
                    item.poster_path || item.backdrop_path
                  }`}
                  alt={item.name || item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
