// Declare DOM variables
let play = document.getElementsByClassName("play");
let reset = document.getElementsByClassName("reset")[0];
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let threeTwo = document.getElementsByClassName("three-2");
let four = document.getElementsByClassName("four");
let rotate = document.getElementsByClassName("rotate");
let playerBoard = document.getElementsByClassName("player-board");
let computerBoard = document.getElementsByClassName("computer-board");
const el = document.getElementsByClassName("player-board")[0];

reset.addEventListener('click', function () {
  location.reload();
});

// Declare state variables
const boardSize = 8; 
const board = [];
let playerShips = [];
let computerShips = [];
let hold = 0;

let isClicked = {
  twoClicked: false,
  threeClicked: false,
  threeTwoClicked: false,
  fourClicked: false
}

// Event listeners for the Ship buttons
two.addEventListener('click', function () {
  hold = 2;
  let button = two;
  let el = button;
  if (isClicked.twoClicked === false) {
  shipHoverEffect();
  playerShipPlacement(el)
  buttonClickedEffect(button)
  isClicked.twoClicked = true;
  } else {
    alert("You've already placed this ship!");
}});

three.addEventListener('click', function () {
  hold = 3;
  let button = three;
  let el = button;
  if (isClicked.threeClicked === false) {
  shipHoverEffect();
  playerShipPlacement(el)
  buttonClickedEffect(button)
  isClicked.threeClicked = true;
  } else {
    alert("You've already placed this ship!");
}});

threeTwo.addEventListener('click', function () {
  hold = 3.5;
  let button = threeTwo;
  let el = button;
  if (isClicked.threeClicked === false) {
  shipHoverEffect();
  playerShipPlacement(el)
  buttonClickedEffect(button)
  isClicked.threeClicked = true;
  } else {
    alert("You've already placed this ship!");
}});

four.addEventListener('click', function () {
  hold = 4;
  let button = four;
  let el = button;
  if (isClicked.fourClicked === false) {
  shipHoverEffect();
  playerShipPlacement(el)
  buttonClickedEffect(button)
  isClicked.fourClicked = true;
  } else {
    alert("You've already placed this ship!");
}});

// Agregation of functions for Game Start
function startGame() {
  createBoard();
  makeShips();
  placeShips();
}

startGame();