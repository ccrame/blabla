import React from "react";
import { useParams } from "react-router-dom";

import { character } from "./constants";
import { useCheckers } from "./hooks/useCheckers";

import "./styles.css";

export function Checkers() {
  const { id } = useParams();
  const { state, playAMove } = useCheckers();

  return (
    <>
      id is {id}
      <section className="board">
        {state.board.map((item, index) => (
          <div className="square" onClick={() => playAMove(index)} key={index}>
            {character[item]}
          </div>
        ))}
      </section>
    </>
  );
}
