export class Player{
    #name

    constructor(name = 'player1'){
        this.#name = name
    }

    getPlayerName(){
        return this.#name;
    }
}