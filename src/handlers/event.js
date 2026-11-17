import { playRound, resetGame,  } from "../state/storage.js";
import { playGame } from "../index.js";

const xInput = document.querySelector('#x');
const yInput = document.querySelector('#y');
const attackButton = document.querySelector('.attack-btn');
const resetButton = document.querySelector('.reset-btn');

export const attackClickHandler = attackButton.addEventListener('click', () => {
    console.log('hello');
    const coordinateX = xInput.value;
    const coordinateY = yInput.value;
    playRound(coordinateX, coordinateY);
    xInput.value = '';
    yInput.value = '';
    xInput.focus();
})

export const resetClickHandler = resetButton.addEventListener('click', () => {
    resetGame();
    playGame();
})




