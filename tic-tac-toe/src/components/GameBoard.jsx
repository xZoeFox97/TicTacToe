import "../styles/GameBoard.css";

function GameBoard({ board, onCellClick }) {
  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className={cell === "X" ? "cell-X" : cell ==="O" ? "cell-O": "cell-empty"} 
                  onClick={() => onCellClick(rowIndex, cellIndex)}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GameBoard;