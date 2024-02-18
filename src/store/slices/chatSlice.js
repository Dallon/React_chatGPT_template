import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    loading: false,
    error: null,
  },
  reducers: {
    // synchronous actions here
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    //  asynchronous actions here
    builder
      .addCase(sendMessage.pending, (state) => {
        // Dispatch setLoading with payload true
        chatSlice.caseReducers.setLoading(state, { payload: true });
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        // Dispatch setMessage with the message payload
        chatSlice.caseReducers.setMessage(state, action);
        // Dispatch setLoading with payload false
        chatSlice.caseReducers.setLoading(state, { payload: false });
      })
      .addCase(sendMessage.rejected, (state, action) => {
        // Dispatch setError with the error payload
        chatSlice.caseReducers.setError(state, action);
        // Dispatch setLoading with payload false
        chatSlice.caseReducers.setLoading(state, { payload: false });
      });
  },
});

export const sendMessage = createAsyncThunk(
  'sendMessage',
  async (inputMessage, { rejectWithValue }) => {
    try {
      const response = await fetch('your API Endpoint', {
        method: "POST",
        body: JSON.stringify({ prompt: inputMessage }), // Changed from `input` to `inputMessage` to correctly use the function argument
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      if (data.error) throw new Error(data.error.message); // Handling API-specific errors
      console.log(data);

      return data.bot;
    } catch (error) {
      return rejectWithValue(error.toString());
    }
  }
);


// Export the synchronous actions
export const { setLoading, setMessage, setError } = chatSlice.actions;

export default chatSlice.reducer;
