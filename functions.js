let playerShipArray = [];
let computerShipArray = [];
let hitSound = new Audio("mi_explosion_03_hpx.mp3");
let missSound = new Audio("splash-by-blaukreuz-6261.mp3");
let status = document.getElementById("status");
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
        // Change the color of the divs to white.
        addGridPlayer.style.backgroundColor = "rgba(190, 190, 190, 0.20)";
        addGridComputer.style.backgroundColor = "rgba(190, 190, 190, 0.20)";
    }
    board.push(currentRow);
}};

// Class constructor for the ships.
class Ship {
    constructor(size, a, b, ) {
        this.size = size; // Size of the ship (e.g. 2 = ["A1", "A2"]).
        this.sunk = false; // Will dictate the color of the ship and update score.
        this.position = [a, b]; // Array of coordinates (e.g. ["A1", "A2", "A3"]).
        this.hits = 0; // Number of hits on the ship.
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
      let isOverlap = true;
      while (isOverlap) {
          const coordinateNumber = Math.floor(Math.random() * 4) + 1;
          const coordinateLetter = String.fromCharCode(65 + Math.floor(Math.random() * 8));
          const position1 = coordinateLetter + coordinateNumber;
          const position2 = coordinateLetter + (coordinateNumber + 1);
          const cS = computerShips[i];
          cS.position[0] = position1;
          cS.position[1] = position2;
          const newShipPositions = [position1, position2];
          if (computerShipArray.every(pos => !newShipPositions.includes(pos))) {
              computerShipArray.push(...newShipPositions);
              isOverlap = false;
          }
          if (cS.size === 3 && !isOverlap) {
              const position3 = coordinateLetter + (coordinateNumber + 2);
              cS.position[2] = position3;
              const newShipPositions2 = [position3];
              if (computerShipArray.every(pos => !newShipPositions2.includes(pos))) {
                  computerShipArray.push(...newShipPositions2);
              } else {
                  isOverlap = true;
              }
          } else if (cS.size === 4 && !isOverlap) {
              const position3 = coordinateLetter + (coordinateNumber + 2);
              const position4 = coordinateLetter + (coordinateNumber + 3);
              cS.position[2] = position3;
              cS.position[3] = position4;
              const newShipPositions2 = [position3, position4];
              if (computerShipArray.every(pos => !newShipPositions2.includes(pos))) {
                  computerShipArray.push(...newShipPositions2);
              } else {
                  isOverlap = true;
}}}}}


// Shows the phantoms of the ships on the player's board during hover.
// function shipHoverEffect(el) {
//   if (buttonClicked === false) {
//   el.addEventListener('mouseover', function (e) {
//     let x = e.target.id;
//     console.log("here")
//     let y = x.split("");
//     let z = y[0].charCodeAt(0) - 65;
//     let w = y[1] - 1;
//   if (hold === 2) {
//     let perp = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
//     e.target.style.backgroundColor = "white";
//     perp.style.backgroundColor = "white";
//   } else if (hold === 3) {
//     let perp = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
//     let perp1 = document.getElementById(String.fromCharCode(65 + (z + 2)) + (w + 1));
//     e.target.style.backgroundColor = "#525252";
//     perp.style.backgroundColor = "#525252";
//     perp1.style.backgroundColor = "#525252";
//   } else if (hold === 4) {
//     let perp = document.getElementById(String.fromCharCode(65 + (z + 2)) + (w + 1));
//     let perp1 = document.getElementById(String.fromCharCode(65 + (z + 3)) + (w + 1));
//     let perp2 = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
//     perp.style.backgroundColor = "#525252";
//     perp1.style.backgroundColor = "#525252";
//     perp2.style.backgroundColor = "#525252";
//   }});

//   el.addEventListener('mouseout', function (e) {
//     let x = e.target.id;
//     let y = x.split("");
//     let z = y[0].charCodeAt(0) - 65;
//     let w = y[1] - 1;
//     if (hold === 2) {
//       let perp = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
//       console.log(e.target.style.backgroundColor)
//       e.target.style.backgroundColor = "red";
//       perp.style.backgroundColor = "red";
//     } else if (hold === 3) {
//       let perp = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
//       let perp1 = document.getElementById(String.fromCharCode(65 + (z + 2)) + (w + 1));
//       e.target.style.backgroundColor = "#bcbcbc";
//       perp.style.backgroundColor = "#bcbcbc";
//       perp1.style.backgroundColor = "#bcbcbc";
//     } else if (hold === 4) {
//       let perp = document.getElementById(String.fromCharCode(65 + (z + 2)) + (w + 1));
//       let perp1 = document.getElementById(String.fromCharCode(65 + (z + 3)) + (w + 1));
//       let perp2 = document.getElementById(String.fromCharCode(65 + (z + 1)) + (w + 1));
//       perp.style.backgroundColor = "#bcbcbc";
//       perp1.style.backgroundColor = "#bcbcbc";
//       perp2.style.backgroundColor = "#bcbcbc";
// }

// });
//   } else {
//     console.log("here2");
//   }

// }

// makes the ship buttons look like they were clicked.
function buttonClickedEffect(button) {
    button.style.backgroundColor = "#525252";
    button.style.border = "5px solid #000000";
};

function checkAllShipsPlaced() {
    for (let i = 0; i < playerShips.length; i++) {
      if (playerShips[i].position.includes(undefined)) {
        return false;
      }
    }
    console.log(true);
};

/*-------BUG-------*/
function hit(e) {
    let x = e.target.id;
    if (computerShipArray.includes(x)) {
      e.target.style.backgroundColor = "#ff0000";
      for (let i = 0; i < computerShips.length; i++) {
        if (computerShips[i].position.includes(x)) {
          computerShips[i].hits++;
          hitSound.play();
          checkShipSunk(i)
        }
      }
    } else {
      e.target.style.backgroundColor = "#ffffff";
      e.target.fontSize = "20px";
      e.target.text = "X";
      missSound.play();
    }
  setTimeout(computerTurn, 500);
    }
function computerTurn() {
      let x, y, coordinate, hit;
      let computerMoves = [];
      do {
        x = Math.floor(Math.random() * 8);
        y = Math.floor(Math.random() * 8);
        coordinate = String.fromCharCode(65 + x) + (y + 1);
      } while (computerMoves.includes(coordinate));
    
      computerMoves.push(coordinate);
      hit = false;
    
      for (let i = 0; i < playerShips.length; i++) {
        hit = checkShipHit(playerShips[i], coordinate);
        if (hit === true) {
          let hit = document.getElementById(coordinate);
          hit.style.backgroundColor = "#ff0000";
          hitSound.play();
          if (checkGameOver() === true) {
            setTimeout(alert("You lose!"), 500);
          }
          break;
        }
      }
    
      if (hit === false) {
        let miss = document.getElementById(coordinate);
        miss.style.backgroundColor = "#ffffff";
        miss.style.fontSize = "30px";
        miss.innerHTML = "X";
        missSound.play();
      }
    }
    



function checkShipHit(ship, coordinate) {
    for (let i = 0; i < ship.position.length; i++) {
      if (ship.position[i] === coordinate) {
        ship.hits = ship.hits + 1;
        return true;
      }
    }
    return false;
}
  
function checkShipSunk(i) {
  if (computerShips[i].hits === computerShips[i].size) {
    status.innerText = "Ship Sunk!", 2000;
    setTimeout(status.innerText = "Playing...", 2000);
    computerShips[i].sunk = true;
  }
};
  
  
function checkGameOver() {
  playerShipsDown = 0;
  computerShipsDown = 0;
  for (let i = 0; i < playerShips.length; i++) {
    if (playerShips[i].sunk === true) {
      playerShipsDown = playerShipsDown + 1;
    } else if (computerShips[i].sunk === true) {
      computerShipsDown = computerShipsDown + 1;
    }}

    if (playerShipsDown === 4) {
      
  return true;
} else if (computerShipsDown === 4) {
  status.innertext = "Game Over! You win!";
  return true;
}}
  
// 
function playerShipPlacement(el) {
  el.addEventListener('click', function (e) {
    if (hold === 2) {
      let x = e.target.id;
      let y = x.split("");
      let z = y[0].charCodeAt(0) - 65;
      let w = y[1] - 1;
      playerShips[0].position[0] = x;
      playerShips[0].position[1] = String.fromCharCode(65 + (z + 1)) + (w + 1);
      playerShipArray.push(x, playerShips[0].position[1]);
      let perp = document.getElementById(playerShips[0].position[1]);
      e.target.style.backgroundColor = "#5A5A5A";
      perp.style.backgroundColor = "#5A5A5A";
   } else if (hold === 3) {
        let x = e.target.id;
        let y = x.split("");
        let z = y[0].charCodeAt(0) - 65;
        let w = y[1] - 1;
        playerShips[1].position[0] = x;
        playerShips[1].position[1] = String.fromCharCode(65 + (z + 1)) + (w + 1);
        playerShips[1].position[2] = String.fromCharCode(65 + (z + 2)) + (w + 1);
        playerShipArray.push(x, playerShips[1].position[1], playerShips[1].position[2]);
        let perp = document.getElementById(playerShips[1].position[1]);       
        let perp1 = document.getElementById(playerShips[1].position[2]);
        e.target.style.backgroundColor = "#5A5A5A";
        perp.style.backgroundColor = "#5A5A5A";
        perp1.style.backgroundColor = "#5A5A5A";
      } else if (hold === 3.5) {
        let x = e.target.id;
        let y = x.split("");
        let z = y[0].charCodeAt(0) - 65;
        let w = y[1] - 1;
        playerShips[2].position[0] = x;
        playerShips[2].position[1] = String.fromCharCode(65 + (z + 1)) + (w + 1);
        playerShips[2].position[2] = String.fromCharCode(65 + (z + 2)) + (w + 1);
        playerShipArray.push(x, playerShips[2].position[1], playerShips[2].position[2]);
        let perp = document.getElementById(playerShips[2].position[1]);       
        let perp1 = document.getElementById(playerShips[2].position[2]);
        e.target.style.backgroundColor = "#5A5A5A";
        perp.style.backgroundColor = "#5A5A5A";
        perp1.style.backgroundColor = "#5A5A5A";
      } else if (hold === 4) {
        let x = e.target.id;
        let y = x.split("");
        let z = y[0].charCodeAt(0) - 65;
        let w = y[1] - 1;
        playerShips[3].position[0] = x;
        playerShips[3].position[1] = String.fromCharCode(65 + (z + 1)) + (w + 1);
        playerShips[3].position[2] = String.fromCharCode(65 + (z + 2)) + (w + 1);
        playerShips[3].position[3] = String.fromCharCode(65 + (z + 3)) + (w + 1);
        playerShipArray.push(x, playerShips[3].position[1], playerShips[3].position[2], playerShips[3].position[3]);
        let perp = document.getElementById(playerShips[3].position[1]);       
        let perp1 = document.getElementById(playerShips[3].position[2]);
        let perp2 = document.getElementById(playerShips[3].position[3]);
        e.target.style.backgroundColor = "#5A5A5A";
        perp.style.backgroundColor = "#5A5A5A";
        perp1.style.backgroundColor = "#5A5A5A";
        perp2.style.backgroundColor = "#5A5A5A";
    }})
  };
  