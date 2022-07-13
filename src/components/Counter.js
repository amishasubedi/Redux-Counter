import { useSelector, connect } from "react-redux";

import classes from "./Counter.module.css";

/**
 * extracting data from the Redux store state using useSelector() function
 * it takes the current state as an argument and returns value derived from that state
 * each time it runs, it returns a new object
 * so, returning a new object every time will always force a re-render by default
 */
const Counter = () => {
  const counter = useSelector((state) => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
