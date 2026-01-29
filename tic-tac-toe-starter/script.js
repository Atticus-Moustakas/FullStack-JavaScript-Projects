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
  if (gameIsOver) return;

  const cell = event.target;

  if (cell.classList.contains("o") || cell.classList.contains("x")) {
    return;
  }
  
  cell.classList.add(markers[player]);
  switchPlayer();
  
}

// --- Helper Methods ---

// Return the linear index corresponding to the row and column subscripts
function toLinearIndex(row, col) {
  return row * numRows + col;
}

// TODO: Add more!
function switchPlayer() {
  player = 1 - player; //switches player
}