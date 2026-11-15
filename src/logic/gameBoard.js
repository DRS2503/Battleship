import { Ship } from './ship.js'

export class GameBoard {
    #size
    #grid
    #ships = []
    #attacked = new Set();

    constructor(size = 10) {
        this.#size = size;
        this.#grid = Array.from({ length: size }, () => { return Array(size).fill(null) })
    }

    getGrid() { return this.#grid; }

    allSunk() {
        for (let ship of this.#ships) {
            if (!ship.isSunk()) {
                return false
            }
        }
        return true
    }

    validPlacement(horizontal, x, y, length) {
        if (horizontal) {
            for (let i = 0; i < length; i++) {
                if (x >= this.#size || y + i >= this.#size || this.#grid[x][y + i] != null) {
                    return false
                }
            }
        }
        else {
            for (let i = 0; i < length; i++) {
                if (x + i >= this.#size || y >= this.#size || this.#grid[x + i][y] != null) {
                    return false
                }
            }
        }
        return true
    }

    placeShip(horizonal = true, x, y, length){
        const ship = new Ship(length);
        this.#ships.push(ship);
        if (horizonal) {
            for (let i = 0; i < length; i++) {
                this.#grid[x][y + i] = ship;
            }
        }
        else {
            for (let i = 0; i < length; i++) {
                this.#grid[x + i][y] = ship;
            }
        }
    }

    receiveAttack(x, y) {
        if (x < 0 || x >= this.#size || y < 0 || y >= this.#size) {
            return new Error('Coordinates out of range');
        }
        if (this.#attacked.has(`${x},${y}`)) {
            return new Error("Already attacked this space");
        }
        if (this.#grid[x][y] != null) {
            this.#grid[x][y].hit();
        }
        this.#attacked.add(`${x},${y}`);
    }

    printGameBoard() {
        let string = '';
        for (let i = 0; i < this.#size; i++) {
            for (let j = 0; j < this.#size; j++) {
                if (this.#grid[i][j] == null) {
                    string = string + " " + "00";
                }
                else {
                    string = string + " " + "11"
                }
            }
            console.log(string);
            string = '';
        }
    }
}
