import { Ship } from './ship.js'

export class GameBoard{
    #size
    #grid
    #ships = []
    #attacked = new Set();

    constructor(size = 10){
        this.#size = size;
        this.#grid = Array.from({ length: size }, () =>  { return Array(size).fill(null) })
    }

    placeShip(horizonal = true, x, y, length){

    }

    receiveAttack(x, y){
        
    }

    printGameBoard(){
        let string = '';
        for(let i = 0; i < this.#size; i++){
            for(let j = 0; j < this.#size; j++){
                string = string + " " + this.#grid[i][j];
            }
            console.log(string);
            string = '';
        }
    }
}