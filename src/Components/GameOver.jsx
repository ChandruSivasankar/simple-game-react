export default function GameOver({winner,onRestart}){
    return(
        <div id="game-over" >
            {winner && <p>{winner} Won </p>}
            {!winner && <p>Draw</p>}
            <p>
                <button onClick={onRestart}>Rematch</button>
            </p>
        </div>
    );
}