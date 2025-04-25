import HomePage from "../components/pages/HomePage";
import SearchPage from "../components/pages/SearchResultsPage";
import MoviePage from "../components/pages/MoviePage";

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
    link: "/search/",
    element: <SearchPage />,
  },
];
