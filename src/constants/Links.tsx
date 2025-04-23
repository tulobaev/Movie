import HomePage from "../components/pages/HomePage";
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
];
