import {createAction, props} from '@ngrx/store';
import {configState} from '../objdef/configstate.shape';

export const updateConfigState = createAction('[Push new config state vs. dom]',
   props<{args: configState}>());

export const updateSingleProp = createAction('[Push new config state vs. dom]',
   props<{args: Object}>());

export const testConfigState = createAction('[test test test]');