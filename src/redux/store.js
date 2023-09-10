import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice } from "./sliceContacts";

export const store = configureStore({
  reducer: {
    contactsSlice,
  },
});

