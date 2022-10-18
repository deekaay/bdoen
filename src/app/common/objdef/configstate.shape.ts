

import {Rung} from './rung.shape';
import {ladder_result} from './ladder_result.shape';



export interface configState
    {
    targetFailStacks : number,
    metastrategy : Array<number>,
    maxAttempts: number,
    numIterations: number,
    ladder: Array<Rung>
    ladderResults: Array<ladder_result>;
    }
