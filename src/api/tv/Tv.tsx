import axios from "axios";

const API_KEY = import.meta.env.VITE_KEY;
const API = import.meta.env.VITE_API;

export const fetchTopRated = async (type: "movie" | "tv") => {
  const url = `${API}${type}/top_rated?api_key=${API_KEY}&language=ru-US&page=1`;
  const { data } = await axios.get(url);
  return data.results;
};
