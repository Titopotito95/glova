import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    profile: {},
  },
  reducers: {
    addProfile: (state, { payload }) => {
      state.profile = payload;
    },
    setLogin: (state, { payload }) => {
      state.loggedIn = payload;
    },
  },
});

export const { addProfile, setLogin } = userSlice.actions;

export default userSlice.reducer;
