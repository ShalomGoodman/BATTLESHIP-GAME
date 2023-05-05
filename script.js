const boardSize = 10; 
const board = []; 

for (let row = 0; row < boardSize; row++) {
  const currentRow = [];
  for (let col = 0; col < boardSize; col++) {
    const coordinate = String.fromCharCode(65 + col) + (row + 1);
    currentRow.push(coordinate);}
  board.push(currentRow);
}

function makeShips(playerShips, computerShips) {
    class Ships {
        constructor() {
            this.ships = [
                {name: 'Carrier', size: 5, sunk: false},
                {name: 'Battleship', size: 4, sunk: false},
                {name: 'Cruiser', size: 3, sunk: false},
                {name: 'Submarine', size: 3, sunk: false},
                {name: 'Destroyer', size: 2, sunk: false}
            ]
    }}
    let playerShips = new Ships();
    let computerShips = new Ships();
}