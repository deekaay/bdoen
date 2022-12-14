import {createAction, props} from '@ngrx/store';
import {configState} from '../common/objdef/configstate.shape';
import {ladder_result} from '../common/objdef/ladder_result.shape';
import {calcResult} from '../common/objdef/calcResult.shape';

export const updateConfigState = createAction('[Push new config state vs. dom]',
   props<{args: configState}>());

export const updateSingleProp = createAction('[Update single property]', 
   props<{args: Object}>());    

export const updateRungStrategy = createAction('Update Strategy within Rung',
   props<{ rung: number, stratIndex: number, newVal : number }>());

export const addRungToLadder  = createAction('Add Rung', props<{pos: number}>() );
export const deleteRungFromLadder  = createAction('Delete Rung', props<{pos: number}>() );

export const changeEndFS  = createAction('Change End FS', props<{rung: number, endfs: number}>() );

export const testConfigState = createAction('[test test test]');

export const addSimulationResult = createAction('Simulation Result Received', props<calcResult>());