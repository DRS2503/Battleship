import { getPlayerGameBoard, getComputerGameBoard } from "../state/storage.js";

let playerDiv = document.querySelector('.player-board');
let computerDiv = document.querySelector('.computer-board');

export function renderPlyerBoard(){
    playerDiv.textContent = "";
    let player = getPlayerGameBoard();
    for(let row of player.getGrid()){
        for(let col of row){
            let square = document.createElement('div');
            square.classList.add('coordinate');
            if(col == 'o'){
                square.style.backgroundColor = 'green';
            }
            else if(col == 'x'){
                square.style.backgroundColor = 'red';
            }
            else if(col != null){
                square.style.backgroundColor = 'grey';
            }
            else{
                square.style.backgroundColor = 'blue';
            }
            playerDiv.append(square);
        }
    }
}

export function renderComputerBoard(){
    computerDiv.textContent = "";
    let computer = getComputerGameBoard();
    for(let row of computer.getGrid()){
        for(let col of row){
            let square = document.createElement('div');
            square.classList.add('coordinate');
            if(col == 'o'){
                square.style.backgroundColor = 'green';
            }
            else if(col == 'x'){
                square.style.backgroundColor = 'red';
            }
            else{
                square.style.backgroundColor = 'blue';
            }
            computerDiv.append(square);
        }
    }
}

export function displayWinner(winner){
    let winnerHeader = document.querySelector('.winner');
    winnerHeader.textContent = `${winner} Wins!`;
}