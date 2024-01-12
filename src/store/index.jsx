import { configureStore } from "@reduxjs/toolkit";
import conversationsSlice from "./slices/conversationsSlice";
import chatbotStatusSlice from "./slices/chatbotStatusSlice";

const store = configureStore({
  reducers: {
    conversations: conversationsSlice.reducer,
    chatbotStatus: chatbotStatusSlice.reducer
  },
});

export default store;