import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactInterface } from "../utilities/interface";

interface contactsInterface {
  contacts : [ContactInterface?]
}
const initialState:contactsInterface = {
  contacts: []
};
export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setContacts: (state, action) => {
      state.contacts = action.payload;
    },
    addContact: (state, action:PayloadAction<ContactInterface>) => {
      state.contacts.push(action.payload);
    },
    deleteStoreContact: (state:any, action) => {
      state.contacts = state.contacts.filter((contact:ContactInterface) => contact.id !== action.payload);
    },
    updateContact: (state:any, action) => {
      state.contacts = state.contacts.filter((contact:ContactInterface) => contact.id !== action.payload.id);
      state.contacts.push(action.payload);
    },
  },
});

export const { setContacts, addContact, deleteStoreContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;
