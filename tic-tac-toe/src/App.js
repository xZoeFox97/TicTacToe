import './App.css';
import Players from './components/Players';
import GameBoard from './components/GameBoard';
import Score from './components/Score';
import {useState} from 'react';
import {GAME_BOARD, WINNING_COMBINATIONS, PLAYERS} from './data';

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
  const [playerOne, setPlayerOne] = useState(PLAYERS.playerOne);
  const [playerTwo, setPlayerTwo] = useState(PLAYERS.playerTwo);
  const [newGameBoard, setGameBoard] = useState(GAME_BOARD.map(row => [...row].map(cell => cell)));
  const [turns, setTurns] = useState(0);

  const setActivePlayer = () => {
    if (playerTwo.active) {
      setPlayerOne({ ...playerOne, active: true });
      setPlayerTwo({ ...playerTwo, active: false });
    } else {
      setPlayerOne({ ...playerOne, active: false });
      setPlayerTwo({ ...playerTwo, active: true });
    }
  }

  const resetGame = () => {
    setGameBoard(GAME_BOARD.map(row => [...row].map(cell => cell)));
    setTurns(0);
  }

  const resetScore = () => {
    setPlayerOne({ ...playerOne, score: 0 });
    setPlayerTwo({ ...playerTwo, score: 0 });
  }

  const handleCellClick = (rowIndex, cellIndex) => {
    const newBoard = newGameBoard.map(row => [...row]);
    
    if (newBoard[rowIndex][cellIndex] === "") {
      newBoard[rowIndex][cellIndex] = playerOne.active ? playerOne.symbol : playerTwo.symbol;
      setGameBoard(newBoard);
      setActivePlayer();
      setTurns(turns + 1);
    }

    setTimeout(() => {
      const winner = checkWinner(newBoard) === playerOne.symbol ? playerOne : checkWinner(newBoard) === playerTwo.symbol ? playerTwo : null;
      if (winner) {
        alert(`${winner.name} wins!`);
        setPlayerOne({ ...playerOne, score: playerOne.score + (winner === playerOne ? 1 : 0) });
        setPlayerTwo({ ...playerTwo, score: playerTwo.score + (winner === playerTwo ? 1 : 0) });
        resetGame();
        return;
      }

      else if (turns === 8 && !winner) {
        resetGame();
        return;
      }
    }, 100);
  };

  return (
    <div className="App">
      <Players playerOne={playerOne} playerTwo={playerTwo} />
      <GameBoard board={newGameBoard} onCellClick={handleCellClick} />
      <Score playerOne={playerOne} playerTwo={playerTwo} resetScore={resetScore} />
    </div>
  );
}

export default App;
