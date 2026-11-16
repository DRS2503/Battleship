import { addPlayer, addComputer, checkWinner, setNextPlayer, getCurrentPlayer, getPlayerList, getOpponent, attack } from "./state/storage.js";
import { renderPlyerBoard, renderComputerBoard } from "./dom/render.js";


function playGame(){
    
}

//playGame();

addPlayer('john');
addComputer();

renderPlyerBoard();
renderComputerBoard();


