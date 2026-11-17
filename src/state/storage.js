import { Computer, Person } from "../logic/player.js";
import { renderComputerBoard, renderPlyerBoard, displayWinner } from "../dom/render.js";

let currentPlayer = null;
let playersList = [];

export function getCurrentPlayer(){ return currentPlayer}
export function getPlayerList() { return playersList }

function clearGameBoards(){
    for(let player of playersList){
        player.gameBoard = [];
    }
}

export function getOpponent(){
    if(currentPlayer == playersList[0]){
        return playersList[1];
    }
    else{
        return playersList[0];
    }
}

export function getPlayerGameBoard(){
    return playersList[0].gameBoard;
}

export function getComputerGameBoard(){
    return playersList[1].gameBoard;
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

export function playRound(x, y){
    let cpuAttack = false;
    if(!attack(x, y)){
        return
    }
    if(checkWinner()){
        renderComputerBoard();
        renderPlyerBoard();
        displayWinner(currentPlayer.getPlayerName());
        return
    }
    setNextPlayer();
    while(!cpuAttack){
        const xcoord = Math.floor(Math.random() * 10); // 0-9
        const ycoord = Math.floor(Math.random() * 10); // 0-9
        cpuAttack = attack(xcoord, ycoord);
    }
    if(checkWinner()){
        displayWinner(currentPlayer.getPlayerName());
        return
    }
    setNextPlayer();
    renderComputerBoard();
    renderPlyerBoard();
}