import HomePage from "../components/pages/HomePage";
import SearchPage from "../components/pages/SearchResultsPage";

export const links = [
  {
    link: "/",
    element: <HomePage />,
    title: "home",
  },
  {
    link: "/search/",
    element: <SearchPage />,
  },
];
