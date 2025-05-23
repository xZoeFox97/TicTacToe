import "../styles/Score.css"; 

function Score({ playerOne, playerTwo, resetScore }) {
  return (
    <div className="score">
      <h2 className="title">Scoreboard:</h2>
      <p className="first-player-score">{playerOne.name}: {playerOne.score}</p>
      <p className="second-player-score">{playerTwo.name}: {playerTwo.score}</p>
      <button className="reset-button" onClick={() => {resetScore()}}>Reset</button>
    </div>
  );
}

export default Score;