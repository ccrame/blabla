import React from "react";

import { character } from "./constants";
import { useCheckers } from "./hooks/useCheckers";

import "./styles.css";

export function Checkers() {
  const { state, playAMove } = useCheckers();

  return (
    <section className="board">
      {state.board.map((item, index) => (
        <div className="square" onClick={() => playAMove(index)} key={index}>
          {character[item]}
        </div>
      ))}
    </section>
  );
}
