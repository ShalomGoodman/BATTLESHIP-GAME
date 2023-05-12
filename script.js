// Declare DOM variables
let play = document.getElementsByClassName("play");
let reset = document.getElementsByClassName("reset")[0];
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let threeTwo = document.querySelector(".three-2");
let four = document.querySelector(".four");
let rotate = document.getElementsByClassName(".rotate");
let playerBoard = document.getElementsByClassName(".player-board");
let computerBoard = document.querySelector(".computer-board");
const el = document.getElementsByClassName("player-board")[0];

reset.addEventListener('click', function () {
  location.reload(); // Reloads the page to reset the game
});

// Declare state variables
const boardSize = 8; 
const board = [];
let playerShips = [];
let computerShips = [];
let hold = 0;

 // Object to track if a ship button has been clicked
let isClicked = {
  twoClicked: false,
  threeClicked: false,
  threeTwoClicked: false,
  fourClicked: false
};

// Variable to track which button has been clicked
let buttonClicked;

// Event listeners for the Ship buttons
two.addEventListener('click', function () {
  hold = 2;
  let button = two;
  buttonClicked = isClicked.twoClicked;
  if (isClicked.twoClicked === false) {
  // shipHoverEffect(el); (not working in tandem with the buttonClickedEffect function)
  playerShipPlacement(el);
  buttonClickedEffect(button)
  isClicked.twoClicked = true;
  } else {
    alert("You've already placed this ship!"); // Alert if the button has already been clicked
}});

three.addEventListener('click', function () {
  hold = 3;
  let button = three;
  let el = button;
  if (isClicked.threeClicked === false) {
  // shipHoverEffect(el);
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
  let buttonClicked = isClicked.threeTwoClicked;
  if (isClicked.threeTwoClicked === false) {
  // shipHoverEffect(el);
  playerShipPlacement(el)
  buttonClickedEffect(button)
  isClicked.threeTwoClicked = true;
  } else {
    alert("You've already placed this ship!");
}});

four.addEventListener('click', function () {
  hold = 4;
  let button = four;;
  if (isClicked.fourClicked === false) {
  // shipHoverEffect(el);
  playerShipPlacement(el)
  buttonClickedEffect(button)
  isClicked.fourClicked = true;
  } else {
    alert("You've already placed this ship!");
}});

// Event listener for an attempted shot
computerBoard.addEventListener('click', function (e) {
  let target = e.target;
  hit(e);
  checkGameOver();
});

// Event listener for the play button
play[0].addEventListener('click', function () {
  checkAllShipsPlaced(); // Will alert if all ships have not been placed
});

setInterval(function () {
  status.innerText = "Playing...";
}, 5000); // Changes the status to "Playing..." every 5 seconds so you can see if you sunk a new ship.
 

// Agregation of functions for Game Start
function startGame() {
  createBoard();
  makeShips();
  placeShips();
}

startGame();