import {Strategy} from './strategy.shape';

export class Rung {

    constructor(sfs?: number )
    {
            this.startfs = sfs ?? 0;
            this.endfs = this.startfs + 1;
            this.strategy = [ -1 ];
    }
    startfs : number;
    endfs : number;
    strategy : Array<number>;  // This foreign keys to the strategy pk.
}