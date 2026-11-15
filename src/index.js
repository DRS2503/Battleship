import { addPlayer, addComputer, checkWinner, setNextPlayer, getCurrentPlayer, getPlayerList, getOpponent, attack } from "./state/storage.js";

function playGame(){
    
}

//playGame();

addPlayer('john');
addComputer();

console.log(getPlayerList());
console.log(getCurrentPlayer());
console.log(getOpponent());
console.log(attack(0, 0));
console.log(attack(1, 0));
console.log(getPlayerList()[1].gameBoard.allSunk());





