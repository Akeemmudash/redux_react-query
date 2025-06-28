import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import filtersReducer from "../features/filters/filtersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    filter: filtersReducer,
  },
});
