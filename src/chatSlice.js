import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: [],
    loading: false,
    error: null, tokenCount: 0,
    tokenUpdateThreshold: 100, // example threshold
  };


const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        sendMessageRequest: (state) => {
            state.loading = true;
        },
        sendMessageSuccess: (state, action) => {
            state.messages.push(action.payload);
            state.loading = false;
        },

        sendMessageFailure: (state, action) => {
            state.error = action.payload;
            state.loading = true;

        }

    }
})