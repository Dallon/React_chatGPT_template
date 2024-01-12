import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
  loading: false,
  error: null,
};

export const conversationsSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    addConversation(state, action) {
      state.conversations.push(action.payload);
    },
    removeConversation(state, action) {
      state.conversations = state.conversations.filter(
        state.conversations.id !== action.payload,
      );
    },
  },
});

export const {setLoading, setError, addConversation, removeConversation } = conversationsSlice.actions;

export default conversationsSlice.reducer;