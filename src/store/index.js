import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

/** FOR MANAGING COUNTER
 * createSlice() accepts initial state, an object of reducer functions, and a slice name
 * it automatically creates unique action identifiers for different reducers
 */
const counterSlice = createSlice({
  name: "counter", // a name, used in action types
  initialState: initialCounterState, // initial state for reducer

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

// FOR USER AUTHENTICATION
const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// When you work with multiple slices, you only have one redux store, so you call configure store once
// configure store merge all reducers into one big reducer
const store = configureStore({
  // reducer: counterSlice.reducer, // it accepts not only reducer function but object that acts as a map of reducers
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
