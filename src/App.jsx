import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import GameLogs from "./Components/GameLogs";
import { WINNING_COMBINATIONS } from "./winning-combinations";

import { useState } from "react";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  //const [activePlayer, setactivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  function handlePlayer(rowIndex, colIndex) {
    //setactivePlayer((prev) => (prev === "X" ? "O" : "X"));

    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            intialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard handlePlayerSwitch={handlePlayer} gameTurns={gameTurns} />
        <GameLogs gameTurns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
