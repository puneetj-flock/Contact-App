import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticate: null,
};
export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setAuthenticate: (state, action) => {
      state.authenticate = action.payload;
    },
  },
});

export const { setAuthenticate } = userAuthSlice.actions;
export default userAuthSlice.reducer;
