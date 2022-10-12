import {itemCollection} from './itemCollection.shape';
import {actionLog} from './actionLog.shape';

export interface tryLog 
    {
        step_log : Array<actionLog>,
        step_cost : number, 
        incoming_fs : number, 
        result_fs : number, 
        step_result : string
    }
