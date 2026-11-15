import { Computer, Person } from "../logic/player.js";

let currentPlayer = null;
let playersList = [];

export function getCurrentPlayer(){ return currentPlayer}
export function getPlayerList() { return playersList }

export function getOpponent(){
    if(currentPlayer == playersList[0]){
        return playersList[1];
    }
    else{
        return playersList[0];
    }
}

export function addComputer(){
    const computer = new Computer();
    computer.buildFleet();
    playersList.push(computer);
    currentPlayer = playersList[0];
}

export function attack(x, y){
    let opponent = getOpponent();
    return opponent.gameBoard.receiveAttack(x, y);
}

export function addPlayer(name){
    const newPlayer = new Person(name);
    playersList.push(newPlayer);
}

export function checkWinner(){
    for(let player of playersList){
        if(player.gameBoard.allSunk()){
            return true
        }
    }
    return false;
}

export function setNextPlayer(){
    if(currentPlayer == playersList[0]){
        currentPlayer = playersList[1];
    }
    else{
        currentPlayer = playersList[0];
    }
}

export function resetGame(){
    currentPlayer = null;
    playersList = [];
}