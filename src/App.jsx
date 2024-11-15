import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import { useState } from "react";
function App() {
  const [activePlayer, setactivePlayer] = useState("X");
  function handlePlayer() {
    setactivePlayer((prev) => (prev === "X" ? "O" : "X"));
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
        <GameBoard
          handlePlayerSwitch={handlePlayer}
          activeSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
