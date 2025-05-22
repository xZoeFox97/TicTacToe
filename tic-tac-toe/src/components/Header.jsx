import { useState } from "react";
import "../styles/Header.css";

function Header({ activePlayer }) {
  const [playerOne, setPlayerOne] = useState("Player 1");
  const [playerTwo, setPlayerTwo] = useState("Player 2");
  return (
    <header>
      <h1>Tic Tac Toe</h1>
      <div className="players">
        <span className={activePlayer === "X" ? "player-active" : "player"}>
          {`${playerOne}`}: X
        </span>
        
        <span className={activePlayer === "O" ? "player-active" : "player"}>
          {`${playerTwo}`}: O
        </span>
        
      </div>
    </header>
  );
}

export default Header;
