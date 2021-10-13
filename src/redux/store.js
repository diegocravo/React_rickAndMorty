import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./char";

export default configureStore({
  reducer: { search: searchReducer },
});
