import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    selectedUserId: null,
  },
  reducers: {
    setSelectedUserId: (state, action) => {
      state.selectedUserId = action.payload;
    },
  },
});

export const { setSelectedUserId } = usersSlice.actions;
export default usersSlice.reducer;
