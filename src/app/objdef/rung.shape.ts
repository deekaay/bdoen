import {Strategy} from './strategy.shape';

export interface Rung {
    startfs : number,
    endfs : number,
    strategy : Array<Strategy> 
}