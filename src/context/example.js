import { createContext, useContext } from "react";

export const ExampleContext = createContext({});

export function useExampleContext() {
  return useContext(ExampleContext);
}
