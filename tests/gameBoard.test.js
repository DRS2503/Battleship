import { GameBoard } from "../src/logic/gameBoard.js";

describe('Gameboard', () => {
    let gameBoard;

    beforeEach(() => {
        gameBoard = new GameBoard();
    })

    test('Horizontal ship sunk', () => {
        gameBoard.placeShip(true, 0, 0, 3);
        gameBoard.receiveAttack(0, 0);
        gameBoard.receiveAttack(0, 1);
        gameBoard.receiveAttack(0, 2);
        expect(gameBoard.getGrid()[0][0].isSunk()).toBe(true);
    })

    test('Horizontal ship afloat', () => {
        gameBoard.placeShip(true, 0, 0, 3);
        gameBoard.receiveAttack(0, 0);
        gameBoard.receiveAttack(0, 1);
        expect(gameBoard.getGrid()[0][0].isSunk()).toBe(false)
    })

    test('Vertical ship sunk', () => {
        gameBoard.placeShip(false, 0, 0, 3);
        gameBoard.receiveAttack(0, 0);
        gameBoard.receiveAttack(1, 0);
        gameBoard.receiveAttack(2, 0);
        expect(gameBoard.getGrid()[0][0].isSunk()).toBe(true)
    })

    test('Vertical ship sunk', () => {
        gameBoard.placeShip(false, 0, 0, 3);
        gameBoard.receiveAttack(0, 0);
        gameBoard.receiveAttack(1, 0);
        expect(gameBoard.getGrid()[0][0].isSunk()).toBe(false)
    })

    test('Vertical ship sunk', () => {
        gameBoard.placeShip(false, 0, 0, 3);
        gameBoard.receiveAttack(0, 0);
        gameBoard.receiveAttack(1, 0);
        expect(gameBoard.getGrid()[0][0].isSunk()).toBe(false)
    })

    test('All Sunk', () => {
        gameBoard.placeShip(false, 0, 0, 3);
        gameBoard.receiveAttack(0, 0);
        gameBoard.receiveAttack(1, 0);
        gameBoard.receiveAttack(2, 0);
        gameBoard.placeShip(false, 2, 1, 3);
        gameBoard.receiveAttack(2, 1);
        gameBoard.receiveAttack(3, 1);
        gameBoard.receiveAttack(4, 1);
        expect(gameBoard.allSunk()).toBe(true)
    })

    test('All Sunk', () => {
        gameBoard.placeShip(false, 0, 0, 3);
        gameBoard.receiveAttack(0, 0);
        gameBoard.receiveAttack(1, 0);
        gameBoard.receiveAttack(2, 0);
        gameBoard.placeShip(false, 2, 1, 3);
        gameBoard.receiveAttack(2, 1);
        gameBoard.receiveAttack(3, 1);
        expect(gameBoard.allSunk()).toBe(false)
    })
})