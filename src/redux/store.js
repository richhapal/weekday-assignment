import { configureStore } from "@reduxjs/toolkit";
import jobSearchSlice from "./jobSearchSlice";

const store = configureStore({
  reducer: {
    jobSearch: jobSearchSlice,
  },
});

export default store;
