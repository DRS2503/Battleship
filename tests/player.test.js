import { Player } from "../src/logic/player.js";

describe("Player", () => {
    let player

    beforeEach(() => {
        player = new Player();
    })

    test("Default player name", () => {
        expect(player.getPlayerName()).toEqual("player1");
    })

    test("John as player name", () => {
        player = new Player('john');
        expect(player.getPlayerName()).toEqual("john");
    })
})