import axios from "axios";

const API_KEY = import.meta.env.VITE_KEY;
const API = import.meta.env.VITE_API;

export const fetchPopular = async (type: "movie" | "tv") => {
  const url = `${API}${type}/popular?api_key=${API_KEY}&language=ru-US&page=1`;
  const { data } = await axios.get(url);
  return data.results;
};
