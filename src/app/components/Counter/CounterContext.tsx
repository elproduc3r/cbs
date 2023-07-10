import { createContext } from "react";

interface CounterContextType {
  pageVisits: number;
}

export const CounterContext = createContext<CounterContextType>({
  pageVisits: 1
});