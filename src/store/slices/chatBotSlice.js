import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  messages: [],
  userInput: "",
  loading: false,
  error: null
};
export const chatBotSlice = createSlice({
  name: "chatBot",
  initialState,
  reducers: {
    setUserInput(state, action){
      state.userInput = action.payload;
      //send the user Input to the openAI assistants API
    }
    
  }
})
