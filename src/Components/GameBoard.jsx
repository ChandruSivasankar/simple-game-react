import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ handlePlayerSwitch, board }) {
  //const [gameBoard, updateBoard] = useState(initialGameBoard);

  /* function handleSelectSq(rowIndex, colIndex) {
    updateBoard((prevBoard) => {
      const newBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      newBoard[rowIndex][colIndex] = activeSymbol;
      return newBoard;
    });
    handlePlayerSwitch();
  } */

  
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handlePlayerSwitch(rowIndex, colIndex)}
                  disabled={col != null}
                >
                  {col}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
