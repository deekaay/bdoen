
import {createReducer, on} from '@ngrx/store';
import {updateConfigState} from './configstate.actions';

export const initialState : configState = { targetFailStacks: 20 };

export const configReducer = createReducer(
    initialState,
    on(updateConfigState, (state, {args}) => { console.log('Hello'); console.log(args); return { targetFailStacks: 40 } ; })
);

export interface configState
    {
    targetFailStacks : number;
    }