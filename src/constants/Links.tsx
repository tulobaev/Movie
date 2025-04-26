import HomePage from "../components/pages/HomePage";
import SearchPage from "../components/pages/SearchResultsPage";
import MoviePage from "../components/pages/MoviePage";
import TVshowPage from "../components/pages/TVshowPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import MovieDetail from "../components/details/MovieDetail";
export const links = [
  {
    link: "/",
    element: <HomePage />,
    title: "Home",
  },
  {
    link: "/movie",
    element: <MoviePage />,
    title: "Movie",
  },
  {
    link: "/show",
    element: <TVshowPage />,
    title: "TV Show",
  },
  {
    link: "/search/",
    element: <SearchPage />,
  },
  {
    link: "*",
    element: <NotFoundPage />,
  },
    title: "TV Shows",
  },
  {
    link: "/search/:query",
    element: <SearchPage />,
  },
  {
    link: "/details/:id",
    element: <MovieDetail />,
  },
];
