import { createContext, useContext } from "react";

const CounterContext = createContext({
  counterValue: 0,
  increamentCounter: () => {},
  decreamentCounter: () => {},
  resetCounter: () => {},
});

export const CounterContextProvider = CounterContext.Provider;

export default function useCounterContext() {
  return useContext(CounterContext);
}
