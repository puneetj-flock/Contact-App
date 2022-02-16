import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedContact: {
    id: 0,
    name: "",
    contact: "",
    email: "",
    address: "",
    score: 0,
  },
};
export const selectedContactSlice = createSlice({
  name: "selectedContact",
  initialState,
  reducers: {
    setSelectedContact: (state, action) => {
      state.selectedContact = action.payload;
    },
    clearSelectedContact: (state) => {
      state.selectedContact = initialState.selectedContact;
    },
  },
});

export const { setSelectedContact, clearSelectedContact } =
  selectedContactSlice.actions;
export default selectedContactSlice.reducer;
