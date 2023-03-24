import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import ajax from "@/utils/ajax";
export interface InitialState {
  currentTab: string;
}

const initialState: InitialState = {
  currentTab: "home",
};

// export const fetchGlobalMultidataAction = createAsyncThunk(
//   "fetch/globalmultidata",
//   async () => {
//     const res = await ajax.get("xxx");
//     return res?.data;
//   }
// );

const global = createSlice({
  name: "global",
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<{ [key: string]: unknown }>) => {
      const obj = action.payload;
      Object.keys(obj).forEach((key) => {
        // @ts-ignore
        state[key] = obj[key];
      });
    },
  },
  extraReducers: {
    // [fetchGlobalMultidataAction.fulfilled](state, { payload }) {
    //   state.xxx = payload.xxx
    // },
  },
});

export const { setState } = global.actions;

export default global.reducer;
