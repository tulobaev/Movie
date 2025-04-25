import { FC, useState } from "react";
import scss from "./SearchResultsPage.module.scss";
import Card from "../../ui/card/Card";
import { useNavigate } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";

interface IData {
  title: string | undefined;
  poster_path: string;
  release_date: number;
  vote_average: number;
}

// fake data
const data: IData[] = [
  {
    title: "The Shawshank Redemption",
    poster_path: "https://example.com/shawshank.jpg",
    release_date: 1994,
    vote_average: 9.3,
  },
  {
    title: "The Godfather",
    poster_path: "https://example.com/godfather.jpg",
    release_date: 1972,
    vote_average: 9.2,
  },
  {
    title: "Inception",
    poster_path: "https://example.com/inception.jpg",
    release_date: 2010,
    vote_average: 8.8,
  },
  {
    title: "Pulp Fiction",
    poster_path: "https://example.com/pulpfiction.jpg",
    release_date: 1994,
    vote_average: 8.9,
  },
  {
    title: undefined,
    poster_path: "https://example.com/matrix.jpg",
    release_date: 1999,
    vote_average: 8.7,
  },
  {
    title: "Forrest Gump",
    poster_path: "https://example.com/forrestgump.jpg",
    release_date: 1994,
    vote_average: 8.8,
  },
  {
    title: "The Dark Knight",
    poster_path: "https://example.com/darkknight.jpg",
    release_date: 2008,
    vote_average: 9.0,
  },
  {
    title: "Interstellar",
    poster_path: "https://example.com/interstellar.jpg",
    release_date: 2014,
    vote_average: 8.6,
  },
  {
    title: "Fight Club",
    poster_path: "https://example.com/fightclub.jpg",
    release_date: 1999,
    vote_average: 8.8,
  },
  {
    title: "The Lord of the Rings",
    poster_path: "https://example.com/lotr.jpg",
    release_date: 2001,
    vote_average: 8.8,
  },
  {
    title: "The Lord of the Rings",
    poster_path: "https://example.com/lotr.jpg",
    release_date: 2001,
    vote_average: 8.8,
  },
  {
    title: "The Lord of the Rings",
    poster_path: "https://example.com/lotr.jpg",
    release_date: 2001,
    vote_average: 8.8,
  },
  {
    title: "The Lord of the Rings",
    poster_path: "https://example.com/lotr.jpg",
    release_date: 2001,
    vote_average: 8.8,
  },
  {
    title: "The Lord of the Rings",
    poster_path: "https://example.com/lotr.jpg",
    release_date: 2001,
    vote_average: 8.8,
  },
  {
    title: "The Lord of the Rings",
    poster_path: "https://example.com/lotr.jpg",
    release_date: 2001,
    vote_average: 8.8,
  },
];

const SearchResultsPage: FC = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemPerPages = 12;
  const count = Math.ceil(data.length / itemPerPages);

  function getCurrentPageBooks() {
    let start = (page - 1) * itemPerPages;
    let end = start + itemPerPages;
    return data.slice(start, end);
  }

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
          <h1>Search Results for mine</h1>

          <div className={scss.boxCard}>
            {getCurrentPageBooks().map((item, index) => (
              <Card
                key={index} // изменю на id
                title={item.title} // добавлю  || item.name
                image={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                    : "/fallback.jpg"
                }
                year={new Date(item.release_date).getFullYear()} // добавлю  || item.first_air_date
                rating={item.vote_average}
                onClick={() => navigate(`/details`)}
              />
            ))}
          </div>
        </div>
        <div className={scss.pagination}>
          <Stack spacing={2}>
            <Pagination
              onChange={handlePageChange}
              count={count}
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
      </div>
    </section>
  );
};

export default SearchResultsPage;
