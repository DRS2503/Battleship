import { addPlayer, addComputer,  getPlayerGameBoard, playRound } from "./state/storage.js";
import { renderPlyerBoard, renderComputerBoard } from "./dom/render.js";
import { attackClickHandler, resetClickHandler } from "./handlers/event.js";

export function playGame(){
    resetClickHandler;
    attackClickHandler;
    addPlayer();
    addComputer();
    getPlayerGameBoard().placeShip(true, 0, 0, 3);
    getPlayerGameBoard().placeShip(false, 5, 5, 2);
    getPlayerGameBoard().placeShip(false, 8, 3, 1);
    renderPlyerBoard();
    renderComputerBoard();

}

playGame()








