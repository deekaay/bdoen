import {Strategy} from './strategy.shape';

export interface Rung {
    startfs : number,
    endfs : number,
    strategy : Array<number>  // This foreign keys to the strategy pk.
}