import useCounterStore from "./store";

const Counter = () => {
  /** Reducer: a function that allow us to centralize state updates
   * in a component
   */
  // const [value, dispatch] = useReducer(counterReducer, 0);
  const { counter, increment, reset } = useCounterStore(); //  Zustand

  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
