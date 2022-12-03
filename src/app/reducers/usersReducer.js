import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    profile: {},
    currentLocation: {},
    currentAddress: null,
  },
  reducers: {
    addProfile: (state, { payload }) => {
      state.profile = payload;
    },
    setRecentLocation: (state, { payload }) => {
      state.currentLocation = payload;
    },
    setCurrentAddress: (state, { payload }) => {
      state.currentAddress = payload;
    },
    setLogin: (state, { payload }) => {
      state.loggedIn = payload;
    },
  },
});

export const { addProfile, setLogin, setRecentLocation, setCurrentAddress } =
  userSlice.actions;

// for use with google map ( requires api key)
export const getCurrentUserAddress = (position) => (dispatch) => {
  try {
    let lat = position?.lat;
    let lng = position?.lng;

    let key = "";
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&location_type=ROOFTOP&key=${key}`;

    return axios
      .get(url)
      .then((res) => {
        let address = res?.data?.plus_code?.compound_code;
        dispatch(setCurrentAddress(address));
      })
      .catch((err) => console.log(err.response));
  } catch (error) {
    console.log(error);
  }
};
export default userSlice.reducer;
