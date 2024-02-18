import { configureStore } from "@reduxjs/toolkit";
import conversationsSlice from "./slices/conversationsSlice";
import chatbotStatusSlice from "./slices/chatbotStatusSlice";
import { chatSlice } from "./slices/chatSlice";

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer, // 
  },
});
export default store;