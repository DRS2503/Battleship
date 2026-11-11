export class Player{
    #name

    constructor(name = 'player1'){
        this.#name = name
    }

    getPlayerName(){
        return this.#name;
    }
}

export class Person extends Player{
    constructor(name = 'Player'){
        super(name);
    }
}

export class Computer extends Player{
    constructor(name = 'Computer'){
        super(name)
    }
}