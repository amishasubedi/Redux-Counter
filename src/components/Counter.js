import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";

/**-------------------------------------------useSelector()---------------------------------------------
 * extracts data from the Redux store state
 * it takes the current state as an argument and returns value derived from that state
 * each time it runs, it returns a new object
 * so, returning a new object every time will always force a re-render by default
 *
 *
 * --------------------------------------------useDispatch()---------------------------------------------
 * returns a reference to the dispatch function from the Redux store
 *
 */
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
