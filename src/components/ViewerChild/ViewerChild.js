import React from "react";

import { useExampleContext } from "../../context/example";

export function ViewerChild() {
  const state = useExampleContext();

  return <>Viewer child says {state.text}</>;
}
