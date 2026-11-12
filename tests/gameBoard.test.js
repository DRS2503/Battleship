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

    test('valid ship placement horizontal', () => {
        gameBoard.placeShip(true, 0, 0, 3);
        expect(gameBoard.validPlacement(true, 1, 0, 2)).toBe(true);
    })

    test('valid ship placement horizontal', () => {
        gameBoard.placeShip(false, 0, 0, 3);
        expect(gameBoard.validPlacement(false, 0, 1, 2)).toBe(true);
    })

    test('vertical collision', () => {
        gameBoard.placeShip(true, 1, 0, 3);
        expect(gameBoard.validPlacement(false, 0, 0, 2)).toBe(false);
    })

    test('Horizontal collision', () => {
        gameBoard.placeShip(true, 0, 1, 2);
        expect(gameBoard.validPlacement(true, 0, 0, 2)).toBe(false);
    })

    test('Valid but close', () => {
        gameBoard.placeShip(true, 0, 1, 2);
        expect(gameBoard.validPlacement(false, 0, 0, 1)).toBe(true);
    })
    
})