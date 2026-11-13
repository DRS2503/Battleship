import { addPlayer, addComputer, getPlayerList, getCurrentPlayer, checkWinner } from "../src/state/storage.js";

describe('State', () => {
    let person;
    let computer;

    beforeEach(() => {
        addComputer();
        addPlayer('john');
    })

    test('Horizontal ship sunk', () => {
        getPlayerList()[1].gameBoard.placeShip(true, 0, 0, 2);
        getPlayerList()[1].gameBoard.placeShip(true, 1, 0, 1);
        getPlayerList()[1].gameBoard.receiveAttack(0, 0);
        getPlayerList()[1].gameBoard.receiveAttack(0, 1);
        getPlayerList()[0].gameBoard.receiveAttack(7, 4);
        getPlayerList()[0].gameBoard.receiveAttack(7, 5);
        getPlayerList()[0].gameBoard.receiveAttack(1, 0);
        expect(checkWinner()).toBe(true);
    })

    test('Horizontal ship sunk', () => {
        getPlayerList()[1].gameBoard.placeShip(true, 0, 0, 2);
        getPlayerList()[1].gameBoard.placeShip(true, 1, 0, 1);
        getPlayerList()[1].gameBoard.receiveAttack(0, 0);
        getPlayerList()[1].gameBoard.receiveAttack(0, 1);
        getPlayerList()[0].gameBoard.receiveAttack(7, 4);
        getPlayerList()[0].gameBoard.receiveAttack(1, 0);
        expect(checkWinner()).toBe(true);
    })

})