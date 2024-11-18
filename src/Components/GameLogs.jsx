export default function GameLogs({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((item) => (
        <li key={`${item.square.row}${item.square.col}`}>
          Player : {item.player} and {item.square.row},{item.square.col}{" "}
        </li>
      ))}
    </ol>
  );
}
