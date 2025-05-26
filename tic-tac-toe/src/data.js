export const GAME_BOARD = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export const WINNING_COMBINATIONS = [
  [0, 1, 2], // Row 1
  [3, 4, 5], // Row 2
  [6, 7, 8], // Row 3
  [0, 3, 6], // Column 1
  [1, 4, 7], // Column 2
  [2, 5, 8], // Column 3
  [0, 4, 8], // Diagonal \
  [2, 4, 6], // Diagonal /
];

export const PLAYERS = {
  playerOne: { name: "Player 1", symbol: "X", active: true, score: 0},
  playerTwo: { name: "Player 2", symbol: "O", active: false, score: 0},
};