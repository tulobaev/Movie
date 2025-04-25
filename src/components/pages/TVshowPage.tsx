import { FC, useEffect, useState } from "react";
import scss from "./TVshowPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import { setData } from "../../store/slice/DataSlice";
import axios from "axios";
import Card from "../../ui/card/Card";
import { useNavigate } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";

const API_KEY = import.meta.env.VITE_KEY;
const API = import.meta.env.VITE_API;

const TVshowPage: FC = () => {
  const [category, setCategory] = useState("popular");
  const { data } = useAppSelector((store) => store.data);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  async function fetchProduct() {
    try {
      const url = `${API}tv/${category}?api_key=${API_KEY}&language=ru-US&page=1`;
      const { data } = await axios.get(url);
      dispatch(setData(data.results));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [category]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentItems = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id={scss.TVshowPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.title}>
            <h1>Movies</h1>
            <div className={scss.category_select}>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
              </select>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className={scss.box}>
            {currentItems.map((item) => (
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

        {data.length > itemsPerPage && (
          <div className={scss.pagination}>
            <Stack spacing={2}>
              <Pagination
                onChange={handlePageChange}
                count={totalPages}
                shape="rounded"
                color="primary"
                page={page}
                sx={{
                  "& .MuiPaginationItem-root": {
                    color: "#fff",
                  },
                  "& .MuiPaginationItem-root.Mui-selected": {
                    backgroundColor: "blue",
                    color: "#fff",
                  },
                  "& .MuiPaginationItem-ellipsis": {
                    color: "#fff",
                  },
                  "& .MuiPaginationItem-previousNext": {
                    color: "#fff",
                  },
                }}
              />
            </Stack>
          </div>
        )}
      </div>
    </div>
  );
};

export default TVshowPage;
