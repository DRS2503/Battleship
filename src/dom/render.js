import { getPlayerGameBoard, getComputerGameBoard } from "../state/storage.js";

export function renderPlyerBoard(){
    let player = getPlayerGameBoard();
    for(let row of player.getGrid()){
        
    }
    
}

export function renderComputerBoard(){
    let computer = getComputerGameBoard();
    for(let row of computer.getGrid()){
        console.log(row);
    }
    console.log('');
}