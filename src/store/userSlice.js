import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initalState: {
    loading: false,
    user: null,
    error: null,
  },
});
export default userSlice.reducer;
