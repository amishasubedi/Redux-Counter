import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

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
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  // increments by 1
  const incrementHandler = () => {
    //dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  // increases by hardcoded amount
  const increaseHandler = () => {
    //dispatch({ type: "increase", amount: 5 });
    dispatch(counterActions.increase(5));
  };

  // decrements by 1
  const decrementHandler = () => {
    //dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  // hides the counter
  const toggleCounterHandler = () => {
    //dispatch({ type: "toggle" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

////////////////////////////////// // Redux with class based component /////////////////////////////////////////
// /**
//  * In Class based component, we cannot use hooks unlike in function based component.
//  * We use connect - it executes connect function, it then returns a new function, it again executes the returned function,
//  * and to this returned function, counter is passed
//  */
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// /**
//  * This function maps redux state to props
//  * @param {*} state - receives redux state
//  * @returns - returns value counter state
//  */
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// /**
//  * This function dispatch value based on different type - equivalent to useDispatch() in function based component
//  * @param {*} dispatch - dispatch state value
//  * @returns - =
//  */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// /**
//  * connect accepts two function parameter.
//  */
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
