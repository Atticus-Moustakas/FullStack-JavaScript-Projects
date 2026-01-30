// Attach an event listener to the "cells"
const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", game);
});

// Global variables that hold the game state
const numRows = 3;
const numCols = 3;
let numEmptyCells = numRows * numCols;
const board = new Array(numEmptyCells);
const markers = ["x", "o"];
let player = 0;
let gameIsOver = false;

// The main event listener and the controller for the game
function game(event) {
  if (gameIsOver)
    return window.alert(
      "This game has ended. Refresh the page for a new game!"
    );

  const cell = event.target;
  const index = cell.id;

  if (board[index]) return window.alert("This cell has already been marked!");

  board[index] = markers[player];
  cell.classList.add(markers[player]);
  numEmptyCells--;

  updateGameStatus();
  switchPlayer();
}

// --- Helper Methods ---

function toLinearIndex(row, col) {
  return row * numRows + col;
}

function switchPlayer() {
  player = player === 0 ? 1 : 0;
}

function updateGameStatus() {
  if (checkRows() || checkColumns() || checkDiagonals()) {
    window.alert(`${markers[player]} won!`);
    gameIsOver = true;
  } else if (numEmptyCells === 0) {
    window.alert(`It's a draw!`);
    gameIsOver = true;
  }
}

function checkRows() {
  for (let row = 0; row < numRows; row++) {
    if (checkRow(row)) return true;
  }
  return false;
}

function checkRow(row) {
  for (let col = 0; col < numCols; col++) {
    const index = toLinearIndex(row, col);
    if (board[index] !== markers[player]) return false;
  }
  return true;
}

function checkColumns() {
  for (let col = 0; col < numCols; col++) {
    if (checkColumn(col)) return true;
  }
  return false;
}

function checkColumn(col) {
  for (let row = 0; row < numRows; row++) {
    const index = toLinearIndex(row, col);
    if (board[index] !== markers[player]) return false;
  }
  return true;
}

function checkDiagonals() {
  return checkMajorDiagonal() || checkMinorDiagonal();
}

function checkMajorDiagonal() {
  for (let row = 0; row < numRows; row++) {
    const index = toLinearIndex(row, row);
    if (board[index] !== markers[player]) return false;
  }
  return true;
}

function checkMinorDiagonal() {
  for (let row = 0; row < numRows; row++) {
    const index = toLinearIndex(row, numCols - row - 1);
    if (board[index] !== markers[player]) return false;
  }
  return true;
}
