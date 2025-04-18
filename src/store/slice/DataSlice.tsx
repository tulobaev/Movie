import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IType {
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
  popular: IType[];
  topRated: IType[];
}

const initialState: { data: IData } = {
  data: {
    popular: [],
    topRated: [],
  },
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IData>) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
