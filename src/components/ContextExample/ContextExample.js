import React, { useState } from "react";
// useState
// useMemo
// useRef
// useCallback
// useReducer
// useEffect

import { Viewer } from "../Viewer";
import { ExampleContext } from "../../context/example";
import { useApi } from "../../hooks/useApi";

export function ContextExample() {
  const [state, setState] = useState("test");
  const [id, setId] = useState();
  const { isLoading, response } = useApi(id);

  function handleClick() {
    setState(String(Math.random()));
  }

  function handleIdClick() {
    setId(prev => prev + 1);
  }

  return (
    <>
      state is {state}
      <ExampleContext.Provider value={{ text: state }}>
        <Viewer />
        <Viewer />
      </ExampleContext.Provider>
      <div>
        <button onClick={handleClick}>click me</button>
        <button onClick={handleIdClick}>set id here</button>
      </div>
      <div>
        isLoading: {isLoading}
        {JSON.stringify(response || {})}
      </div>
    </>
  );
}
