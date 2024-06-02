import useCounterStore from "./store";

const Counter = () => {
  const { counter, increment, reset } = useCounterStore(); //  Zustand
  // const counter = useCounterStore((s) => s.counter); //  Zustand will render it only when the counter value changes

  return (
    <div>
      <span style={{ color: "whitesmoke" }}>Counter ({counter})</span>
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
