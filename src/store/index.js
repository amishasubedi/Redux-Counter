import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// When you work with multiple slices, you only have one redux store, so you call configure store once
// configure store merge all reducers into one big reducer
const store = configureStore({
  // reducer: counterSlice.reducer, // it accepts not only reducer function but object that acts as a map of reducers
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
