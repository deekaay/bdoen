import {createAction, props} from '@ngrx/store';
import {configState} from '../objdef/configstate.shape';

export const updateConfigState = createAction('[Push new config state vs. dom]',
   props<{args: configState}>());

export const updateSingleProp = createAction('[Update single property]', 
   props<{args: Object}>());    

export const updateRungStrategy = createAction('Update Strategy within Rung',
   props<{ rung: number, stratIndex: number, newVal : number }>());

export const addRungToLadder  = createAction('Add Rung', props<{pos: number}>() );
export const deleteRungFromLadder  = createAction('Delete Rung', props<{pos: number}>() );

export const testConfigState = createAction('[test test test]');