import { GameBoard } from "./gameBoard.js";

export class Player{
    #name;

    constructor(name){
        this.#name = name;
        this.gameBoard = new GameBoard();
    }

    getPlayerName(){ return this.#name; }
}

export class Person extends Player{
    constructor(name = 'Player'){
        super(name);
    }
}

export class Computer extends Player{
    constructor(name = 'Computer'){
        super(name)
    }

    buildFleet(){
        //this.gameBoard.placeShip(true, 0, 0, 4);
        //this.gameBoard.placeShip(false, 3, 8, 3);
        this.gameBoard.placeShip(true, 7, 4, 2);
        this.gameBoard.placeShip(true, 1, 0, 1);
    }
}