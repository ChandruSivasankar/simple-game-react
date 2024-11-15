import { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ handlePlayerSwitch, activeSymbol }) {
  const [gameBoard, updateBoard] = useState(initialGameBoard);

  function handleSelectSq(rowIndex, colIndex) {
    updateBoard((prevBoard) => {
      const newBoard = [...prevBoard.map((innerArray) => [...innerArray])];
      newBoard[rowIndex][colIndex] = activeSymbol;
      return newBoard;
    });
    handlePlayerSwitch();
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((col, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSq(rowIndex, colIndex)}>
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