import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  id: '',
  firstName: '',
  lastName: '',
  credits: 0,
  amountToPay: 0,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
    updateUserDetails: (state, { payload }) => {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.id = payload.id;
      state.amountToPay = payload.amountToPay;
      state.credits = payload.credits;
    },
  },
});

export const { updateIsLoggedIn, updateUserDetails } = user.actions;
export default user.reducer;
