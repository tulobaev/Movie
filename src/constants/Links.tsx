import HomePage from "../components/pages/HomePage";
import SearchPage from "../components/pages/SearchResultsPage";
import MoviePage from "../components/pages/MoviePage";
import TVshowPage from "../components/pages/TVshowPage";

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
    title: "TV Shows",
  },
  {
    link: "/search/:query",
    element: <SearchPage />,
  },
];
