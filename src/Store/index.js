import { configureStore } from "@reduxjs/toolkit";
import celebrityReducer from "./Slices/celebritySlice";

const store = configureStore({
  reducer: {
    celebrity: celebrityReducer,
  },
});

export default store;
