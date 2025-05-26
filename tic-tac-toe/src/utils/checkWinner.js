const checkWinner = (board, WINNING_COMBINATIONS) => {
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

export default checkWinner;