import axios from "axios";
import { setSearchProduct } from "../../store/slice/DataSlice";

const API_KEY = import.meta.env.VITE_KEY;
const API = import.meta.env.VITE_API;

export const searchData = async (
  value: string,
  dispatch: any,
  type: "movie" | "tv" = "movie"
) => {
  const url = `${API}search/${type}?api_key=${API_KEY}&query=${value}`;
  const { data } = await axios.get(url);
  dispatch(setSearchProduct(data.results));
};
