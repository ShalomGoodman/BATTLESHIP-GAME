// Creates and Initializes the game board.
function createBoard() {
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
}};

// Class constructor for the ships.
class Ship {
    constructor(size, a, b, c = null, d = null) {
        this.size = size; // Size of the ship (e.g. 2 = ["A1", "A2"]).
        this.sunk = false; // Will dictate the color of the ship and update score.
        this.position = [a, b, c, d]; // Array of coordinates (e.g. ["A1", "A2", "A3"]).
}}

// Makes ships for both the player and computer.
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
]};

// Automatically places the computer's ships.
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
}}};

// Shows the phantoms of the ships on the player's board during hover.
function shipHoverEffect() {
    el.addEventListener('mouseover', function (e) {
      let x = e.target.id;
      let y = x.split("");
      let z = y[0].charCodeAt(0) - 65;
      let w = y[1] - 1;
      if (hold === 2) {
      let perp = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
      e.target.style.backgroundColor = "#525252";
      perp.style.backgroundColor = "#525252";
      } else if (hold === 3) {
      let perp = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
      let perp1 = document.getElementById(String.fromCharCode(65 + (z + 2)) + (w + 1));
      e.target.style.backgroundColor = "#525252";
      perp.style.backgroundColor = "#525252";
      perp1.style.backgroundColor = "#525252";
      } else if (hold === 4) {
      let perp = document.getElementById(String.fromCharCode(65 + (z + 2)) + (w + 1));
      let perp1 = document.getElementById(String.fromCharCode(65 + (z + 3)) + (w + 1));
      let perp2 = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
      perp.style.backgroundColor = "#525252";
      perp1.style.backgroundColor = "#525252";
      perp2.style.backgroundColor = "#525252";
    }});
    el.addEventListener('mouseout', function (e) {
      let x = e.target.id;
      let y = x.split("");
      let z = y[0].charCodeAt(0) - 65;
      let w = y[1] - 1;
      if (hold === 2) {
        let perp = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
        e.target.style.backgroundColor = "#bcbcbc";
        perp.style.backgroundColor = "#bcbcbc";
        } else if (hold === 3) {
        let perp = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
        let perp1 = document.getElementById(String.fromCharCode(65 + (z + 2)) + (w + 1));
        e.target.style.backgroundColor = "#bcbcbc";
        perp.style.backgroundColor = "#bcbcbc";
        perp1.style.backgroundColor = "#bcbcbc";
        } else if (hold === 4) {
        let perp = document.getElementById(String.fromCharCode(65 + (z + 2)) + (w + 1));
        let perp1 = document.getElementById(String.fromCharCode(65 + (z + 3)) + (w + 1));
        let perp2 = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
        perp.style.backgroundColor = "#bcbcbc";
        perp1.style.backgroundColor = "#bcbcbc";
        perp2.style.backgroundColor = "#bcbcbc";
}})};

// makes the ship buttons look like they were clicked.
function buttonClickedEffect(button) {
    button.style.backgroundColor = "#525252";
    button.style.border = "5px solid #000000";
};

function checkAllShipsPlaced() {
    for (let i = 0; i < playerShips.length; i++) {
      if (playerShips[i].position.includes(null)) {
        return false;
      }
    }
    return true;
};
  
function checkShipHit(ship, coordinate) {
    for (let i = 0; i < ship.position.length; i++) {
      if (ship.position[i] === coordinate) {
        ship.position[i] = "hit";
        return true;
      }
    }
    return false;
}
  
function checkShipSunk(ship) {
    for (let i = 0; i < ship.position.length; i++) {
      if (ship.position[i] !== "hit") {
        return false;
      }}
    ship.sunk = true;
    return true;
};
  
  
function checkGameOver() {
      for (let i = 0; i < playerShips.length; i++) {
        if (playerShips[i].sunk = false) {
          return false;
        }
      }
      for (let i = 0; i < computerShips.length; i++) {
        if (computerShips[i].sunk = false) {
          return false;
        }
      }
      return true;
}
  
// 
function playerShipPlacement(el) {
    el.addEventListener('click', function (e) {
      let x = e.target.id;
      let y = x.split("");
      let z = y[0].charCodeAt(0) - 65;
      let w = y[1] - 1;
      playerShips[0].position[0] = x;
      playerShips[0].position[1] = String.fromCharCode(65 + (z + 1)) + (w + 1);
      let perp = document.getElementById(playerShips[0].position[1]);
      e.target.style.backgroundColor = "#af1111";
      perp.style.backgroundColor = "#af1111";
      if (hold === 3) {
        playerShips[1].position[2] = String.fromCharCode(65 + (z + 2)) + (w + 1);
        let perp1 = document.getElementById(playerShips[1].position[2]);
        perp1.style.backgroundColor = "#af1111";
      } else if (hold === 3.5) {
        playerShips[2].position[2] = String.fromCharCode(65 + (z + 2)) + (w + 1);
        let perp1 = document.getElementById(playerShips[1].position[2]);
        perp1.style.backgroundColor = "#af1111";
      } else if (hold === 4) {
        playerShips[3].position[3] = String.fromCharCode(65 + (z + 3)) + (w + 1);
        let perp2 = document.getElementById(playerShips[3].position[3]);
        perp2.style.backgroundColor = "#af1111";
    }}
)};
  