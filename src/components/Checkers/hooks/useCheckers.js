import { useCallback, useReducer } from "react";

const initialState = {
  winner: null,
  player: 1,
  board: [0, 0, 0, 0, 0, 0, 0, 0, 0]
};

function checkForWinner(board) {
  const [first, , last] = board;
  // vertical
  if (first === board[3] && first === board[6]) {
    return first;
  }
  if (board[1] === board[4] && first === board[7]) {
    return first;
  }
  if (board[2] === board[5] && first === board[8]) {
    return first;
  }

  // diagonals
  if (first === board[4] && first === board[8]) {
    return first;
  }
  if (last === board[4] && first === board[6]) {
    return last;
  }

  // horizontals
  if (first === board[1] && first === board[2]) {
    return first;
  }
  if (board[3] === board[4] && board[4] === board[5]) {
    return board[3];
  }
  if (board[6] === board[7] && board[7] === board[8]) {
    return board[6];
  }

  return null;
}

function playAMove(state, indexToPlay) {
  const { board, player } = state;
  const isValidMove = !board[indexToPlay];
  const hasWinner = checkForWinner(board);
  const newPlayer = player === 1 ? 2 : 1;

  const newBoard = board.map((value, index) => {
    if (!value && index === indexToPlay) return player;

    return value;
  });

  return {
    ...state,
    board: newBoard,
    hasWinner,
    player: isValidMove ? newPlayer : player
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "play_a_move":
      return playAMove(state, action.index);

    default:
      return state;
  }
}

export function useCheckers() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const playAMove = useCallback(
    index => dispatch({ type: "play_a_move", index }),
    []
  );

  return {
    state,
    playAMove
  };
}
