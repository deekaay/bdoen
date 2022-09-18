
import {createReducer, on} from '@ngrx/store';
import {updateConfigState, testConfigState, updateSingleProp} from './configstate.actions';
import {configState} from '../objdef/configstate.shape';

export const initialState : configState = { 
        targetFailStacks: 20, 
        metastrategy: [ ], 
        maxAttempts: 500,
        numIterations: 20,
        ladder: [ { startfs: 0, endfs: 10, strategy: [ 1 ] }]
    };

export const configReducer = createReducer(
    initialState,
    //on(updateConfigState, (state, {args}) => { let x = {...args}; x.targetFailStacks++; return x; }),
    //on(testConfigState, (state) => { let z = { ...state}; z.targetFailStacks++; return z;} ),
    on(updateSingleProp, (state, {args} ) => { let z = { ...state, ...{args}}; return z;} )
);
