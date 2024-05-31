interface Action {
  type: "reset" | "increment";
}

const counterReducer = (state: number, action: Action): number => {
  if (action.type === "increment") return state + 1;
  if (action.type === "reset") return 0;
  //   throw new Error("action not supported");
  return state;
};

export default counterReducer;
