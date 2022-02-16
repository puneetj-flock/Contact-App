import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts";
import menuReducer from "./menu";
import selectedContactReducer from "./selectedContact";
import searchTextReducer from "./searchText";
import userAuthReducer from "./userAuth";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
    contacts: contactsReducer,
    selectedContact: selectedContactReducer,
    searchText: searchTextReducer,
    userAuth: userAuthReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
