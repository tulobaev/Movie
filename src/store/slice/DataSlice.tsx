import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialStateType {
  id: number;
  backdrop_path: string;
  title: string;
  name: string;
  poster_path: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
  release_date?: string;
}

interface IData {
  data: IInitialStateType[];
  searchProduct: IInitialStateType[];
}

const initialState: IData = {
  data: [],
  searchProduct: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IInitialStateType[]>) => {
      state.data = action.payload;
    },
    setSearchProduct: (state, action: PayloadAction<IInitialStateType[]>) => {
      state.searchProduct = action.payload;
    },
  },
});

export const { setData, setSearchProduct } = dataSlice.actions;
export default dataSlice.reducer;
