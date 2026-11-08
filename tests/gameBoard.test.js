import { GameBoard } from "../src/logic/gameBoard.js";

describe('Gameboard', () => {
    beforeEach(() => {
        let gameBoard = new GameBoard();
    })

    test('Horizontal ship sunk', () => {
        gameBoard.placeShip(true, 0, 0, 3);
        receiveAttack(0, 0);
        receiveAttack(0, 1);
        receiveAttack(0, 2);
        expect(gameBoard.isSunk()).toBe(true)
    })

    test('Horizontal ship afloat', () => {
        gameBoard.placeShip(true, 0, 0, 3);
        receiveAttack(0, 0);
        receiveAttack(0, 1);
        expect(gameBoard.isSunk()).toBe(false)
    })

    test('Vertical ship sunk', () => {
        gameBoard.placeShip(false, 0, 0, 3);
        receiveAttack(0, 0);
        receiveAttack(1, 0);
        receiveAttack(2, 0);
        expect(gameBoard.isSunk()).toBe(true)
    })

    test('Vertical ship sunk', () => {
        gameBoard.placeShip(false, 0, 0, 3);
        receiveAttack(0, 0);
        receiveAttack(1, 0);
        expect(gameBoard.isSunk()).toBe(true)
    })
    
})