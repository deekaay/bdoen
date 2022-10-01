import {Strategy} from './strategy.shape';

export class Rung {
    constructor()
    {
            this.startfs = 0;
            this.endfs = 0;
            this.strategy = [ ];
    }
    startfs : number;
    endfs : number;
    strategy : Array<number>;  // This foreign keys to the strategy pk.
}