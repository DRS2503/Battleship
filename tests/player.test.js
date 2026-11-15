import { Person } from "../src/logic/player.js";

describe("Player", () => {
    let player

    beforeEach(() => {
        player = new Person();
    })

    test("Default player name", () => {
        expect(player.getPlayerName()).toEqual("Player");
    })

    test("John as player name", () => {
        player = new Person('john');
        expect(player.getPlayerName()).toEqual("john");
    })
})