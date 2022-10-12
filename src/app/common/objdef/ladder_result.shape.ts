import {itemCollection} from './itemCollection.shape';
import {actionLog} from './actionLog.shape';
import {tryLog} from './tryLog.shape';

export interface ladder_result 
    {
    stepLogs : Array<tryLog>,
    inventory: itemCollection,
    cost: number
    }
