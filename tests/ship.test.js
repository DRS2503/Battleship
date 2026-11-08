import { Ship } from "../src/logic/ship.js"

describe('Ship', () => {
    let ship;

    beforeEach(() => {
        ship = new Ship(3);
    })

    test('Not sunk when created', () => {
        expect(ship.isSunk()).toBe(false);
    })

    test('Not sunk hits < size', () => {
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    })


    test('Sunk when hits = size', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    })

    test('Sunk when hits > size', () => {
        ship.hit();
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    })
})