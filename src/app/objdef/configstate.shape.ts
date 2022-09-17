

import {Rung} from './rung.shape';



export interface configState
    {
    targetFailStacks : number,
    metastrategy : Array<number>,
    maxAttempts: number,
    numIterations: number,
    ladder: Array<Rung>
    }
