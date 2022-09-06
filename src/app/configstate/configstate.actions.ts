import {createAction, props} from '@ngrx/store';
import {configState} from './configstate.reducer';

export const updateConfigState = createAction('[Push new config state vs. dom]',
    props<{args: configState}>());