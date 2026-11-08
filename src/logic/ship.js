export class Ship{
    #size
    #numberOfHits

    constructor(size){
        this.#size = size;
        this.#numberOfHits = 0;
    }

    hit(){ this.#numberOfHits += 1; }
    isSunk(){ return this.#numberOfHits >= this.#size }

}