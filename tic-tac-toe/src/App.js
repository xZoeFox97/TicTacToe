import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import {useState} from 'react';
import {GAME_BOARD, WINNING_COMBINATIONS} from './data';

const checkWinner = (board) => {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const [a, b, c] = WINNING_COMBINATIONS[i];
    if (board[Math.floor(a / 3)][a % 3] && 
        board[Math.floor(a / 3)][a % 3] === board[Math.floor(b / 3)][b % 3] && 
        board[Math.floor(a / 3)][a % 3] === board[Math.floor(c / 3)][c % 3]) {
      return board[Math.floor(a / 3)][a % 3];
    }
  }
  return null;
};

function App() {
  const [newGameBoard, setGameBoard] = useState(GAME_BOARD.map(row => [...row].map(cell => cell)));
  const [activePlayer, setActivePlayer] = useState("X");
  const [turns, setTurns] = useState(0);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setGameBoard(GAME_BOARD.map(row => [...row].map(cell => cell)));
    setActivePlayer("X");
    setTurns(0);
  }

  const handleCellClick = (rowIndex, cellIndex) => {
    const newBoard = newGameBoard.map(row => [...row]);
    
    if (newBoard[rowIndex][cellIndex] === "") {
      newBoard[rowIndex][cellIndex] = activePlayer;
      setGameBoard(newBoard);
      setActivePlayer(activePlayer === "X" ? "O" : "X");
      setTurns(turns + 1);
    }

    setTimeout(() => {
      const winner = checkWinner(newBoard);
      if (winner) {
        setWinner(winner);
        alert(`Player ${winner} wins!`);;
        resetGame();
        return;
      }

      else if (turns === 8 && !winner) {
        alert("It's a draw!");
        resetGame();
        return;
      }
    }, 100);
  };

  return (
    <div className="App">
      <Header activePlayer={activePlayer} />
      <GameBoard board={newGameBoard} onCellClick={handleCellClick} />
    </div>
  );
}

export default App;
