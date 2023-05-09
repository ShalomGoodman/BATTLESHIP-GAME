// Declare DOM variables
let play = document.getElementsByClassName("play");
let reset = document.getElementsByClassName("reset")[0];
let two = document.querySelector(".two");
let three = document.getElementsByClassName("three");
let threeTwo = document.getElementsByClassName("three-2");
let four = document.getElementsByClassName("four");
let rotate = document.getElementsByClassName("rotate");
let playerBoard = document.getElementsByClassName("player-board");
let computerBoard = document.getElementsByClassName("computer-board");

reset.addEventListener('click', function () {
  location.reload();
});

// Declare state variables
const boardSize = 8; 
const board = [];
let playerShips = [];
let computerShips = [];

// Create/initiate the board
for (let row = 0; row < boardSize; row++) {
  const currentRow = [];

  for (let col = 0; col < boardSize; col++) {
    const coordinate = String.fromCharCode(65 + col) + (row + 1);
    currentRow.push(coordinate);

    let addGridPlayer = document.createElement("div");
    addGridPlayer.setAttribute("id", coordinate);
    document.querySelector(".player-board").appendChild(addGridPlayer);
    let addGridComputer = document.createElement("div");
    addGridComputer.setAttribute("id", coordinate);
    document.querySelector(".computer-board").appendChild(addGridComputer);
  }
  board.push(currentRow);
}


// Create the Ships
class Ship {
  constructor(size, a, b, c = null, d = null) {
        this.size = size; // Size of the ship (e.g. 2 = ["A1", "A2"]).
        this.sunk = false; // Will dictate the color of the ship and update score.
        this.position = [a, b, c, d]; // Array of coordinates (e.g. ["A1", "A2", "A3"]).
  }}

function makeShips() {
  playerShips = [
    new Ship(2), // Patrol Boat
    new Ship(3), // Submarine
    new Ship(3), // Destroyer
    new Ship(4) // Battleship
  ]
  computerShips = [
    new Ship(2),
    new Ship(3),
    new Ship(3),
    new Ship(4)
  ]
}


function placeShips() {
  for (let i = 0; i < computerShips.length; i++) {
    x = Math.floor(Math.random() * 4) + 1;
    y = String.fromCharCode(65 + Math.floor(Math.random() * 8));
    let el = computerShips[i]
    if (computerShips[i].size === 2) {
    el.position[0] = y + x;
    el.position[1] = y + (x + 1);
    } else if (computerShips[i].size === 3) {
    el.position[0] = y + x;
    el.position[1] = y + (x + 1);
    el.position[2] = y + (x + 2);
    } else if (computerShips[i].size === 4) {
    el.position[0] = y + x;
    el.position[1] = y + (x + 1);
    el.position[2] = y + (x + 2);
    el.position[3] = y + (x + 3);
    }
  }
}

const el = document.getElementsByClassName("player-board")[0];

two.addEventListener('click', function () {
  el.addEventListener('click', function (e) {
    let x = e.target.id;
    let y = x.split("");
    let z = y[0].charCodeAt(0) - 65;
    let w = y[1] - 1;
    playerShips[0].position[0] = x;
    playerShips[0].position[1] = String.fromCharCode(65 + (z + 1)) + (w + 1);
    e.target.style.backgroundColor = "#525252";
  });  
});








function startGame() {
  makeShips();
  placeShips();
  console.log(computerShips);
}

startGame();