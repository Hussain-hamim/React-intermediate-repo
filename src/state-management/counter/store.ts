import { create } from "zustand";

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}
// wrap the curly brace in parenthesis
// cuz to show it's not block scope but an object

const useCounterStore = create<CounterStore>((set) => ({
  // in this object we implement the store
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));

export default useCounterStore;
