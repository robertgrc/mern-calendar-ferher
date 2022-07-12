import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./ui/uiSlice";
// import { uiSlice } from "./";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
});
