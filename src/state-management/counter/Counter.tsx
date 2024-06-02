import { useReducer, useState } from "react";
import counterReducer from "./counterReducer";

const Counter = () => {
  /** Reducer: a function that allow us to centralize state updates
   * in a component
   */
  const [value, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      Counter ({value})
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
