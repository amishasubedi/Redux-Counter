import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

/**
 * createSlice() accepts initial state, an object of reducer functions, and a slice name
 * it automatically creates unique action identifiers for different reducers
 */
const counterSlice = createSlice({
  name: "counter", // a name, used in action types
  initialState, // initial state for reducer

  // an object of key reducers
  reducers: {
    increment(state) {
      state.counter++; // although it seems mutable, this is handled by inner redux toolkit package which keeps the existing state
    },

    decrement(state) {
      state.counter--;
    },

    // multiple state
    increase(state, action) {
      state.counter = state.counter + action.payload; // payload - extra data you might dispatch
    },

    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/////////////////////////////////////////////////////  WITHOUT USING REDUX TOOLKITS  //////////////////////////////////////////////////////////////////

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       // NEVER MUTATE THE STATE like this (state.counter++) here because it will change the existing state
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// configure store merge all reducers into one big reducer
const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
