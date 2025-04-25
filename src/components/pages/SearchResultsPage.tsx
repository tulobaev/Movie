import { FC, useState } from "react";
import scss from "./SearchResultsPage.module.scss";
import Card from "../../ui/card/Card";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";

interface IMovie {
  id: number;
  title: string;
  name: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  first_air_date: string;
  backdrop_path: string;
}

const SearchResultsPage: FC = () => {
  const { query } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const product: IMovie[] = Array.isArray(location.state?.product)
    ? location.state.product
    : [];

  const itemsPerPage = 12;
  const totalPages = Math.ceil(product.length / itemsPerPage);

  const currentItems = product.slice(
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
    <section className={scss.SearchResultsPage}>
      <div className="container">
        <div className={scss.content}>
          <h1>Search Results {query}</h1>

          {product.length === 0 ? (
            <p className={scss.noResults}>Ничего не найдено</p>
          ) : (
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className={scss.boxCard}
            >
              {currentItems.map((item: IMovie) => (
                <Card
                  key={item.id}
                  title={item.title || item.name || "Untitled"}
                  image={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                      : item.backdrop_path
                      ? `https://image.tmdb.org/t/p/original${item.backdrop_path}`
                      : "/fallback.jpg"
                  }
                  year={
                    item.release_date
                      ? new Date(item.release_date).getFullYear()
                      : "N/A"
                  }
                  rating={
                    item.vote_average?.toFixed(1) ||
                    item.first_air_date?.slice(0, 4) ||
                    "?"
                  }
                  onClick={() => navigate(`/details/${item.id}`)}
                />
              ))}
            </div>
          )}
        </div>

        {product.length > itemsPerPage && (
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
    </section>
  );
};

export default SearchResultsPage;
