import Player from "./Components/Player";
import GameBoard from "./Components/GameBoard";
import GameLogs from "./Components/GameLogs";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./Components/GameOver";

import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

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
  const [win,setWin] = useState();
  const activePlayer = deriveActivePlayer(gameTurns);

  let winner;
  let gameBoard = [...initialGameBoard.map(prev => [...prev] ) ];
  
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }


  function handlePlayer(rowIndex, colIndex) {
    //setactivePlayer((prev) => (prev === "X" ? "O" : "X"));

    for(const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =  gameBoard[combination[2].row][combination[2].column];

      if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol){

       // winner = firstSquareSymbol;
        setWin(() => firstSquareSymbol);

      }

    }
    

    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
    
    /* code to check winning combination */
    

    


  }

  const hasDraw = gameTurns.length === 9 && !win;

  function handleRematch(){
    setWin();
    setGameTurns(()=>[]);
    
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
        {(win || hasDraw) && <GameOver winner={win} onRestart={handleRematch}/>}
        <GameBoard handlePlayerSwitch={handlePlayer} board={gameBoard} />
        <GameLogs gameTurns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
