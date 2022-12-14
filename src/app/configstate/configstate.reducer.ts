
import {createReducer, on} from '@ngrx/store';
import {addSimulationResult, updateConfigState, testConfigState, updateSingleProp, updateRungStrategy, addRungToLadder ,deleteRungFromLadder, changeEndFS} from './configstate.actions';
import {configState} from '../common/objdef/configstate.shape';
import {Rung} from '../common/objdef/rung.shape';
import { state } from '@angular/animations';
import {v4 as  uuid} from 'uuid';

export const initialState : configState = { 
        targetFailStacks: 20, 
        metastrategy: [ ], 
        maxAttempts: 500,
        numIterations: 20,
        ladderResults: [ ],
        configVersion : uuid(),
        ladder: [ { startfs: 0, endfs: 10, strategy: [ 1 ] }]
    };

export const configReducer = createReducer(
    initialState,
    //on(updateConfigState, (state, {args}) => { let x = {...args}; x.targetFailStacks++; return x; }),
    //on(testConfigState, (state) => { let z = { ...state}; z.targetFailStacks++; return z;} ),
    on(updateSingleProp, (state, {args} ) => { let z = { ...state, ...args}; return z;} ),
    on(updateRungStrategy, (state, args)  => 
        { let z : Array<number> = [...state.ladder[args.rung].strategy];
            console.log('Update rung strategy');
            if (!z[args.stratIndex])
                z.push(args.newVal);
            else
                z[args.stratIndex] = args.newVal;
            
        // Need to splice z back into the ladder array.
        let q : Array<Rung> = [...state.ladder.slice(0,args.rung), {...state.ladder[args.rung], strategy: z}, ...state.ladder.slice(args.rung+1) ];
        console.log(q);
        return {...state, ladder: q , configVersion: uuid()};
        }) ,
    on(addRungToLadder, 
        (state, {pos}) =>  {
            let q: Array<Rung> = [...state.ladder.slice(0,pos) , new Rung(state.ladder[pos-1].endfs+1), ...state.ladder.slice(pos)];
            return { ...state, ladder: q, configVersion: uuid() };
        }) ,
    on(deleteRungFromLadder, 
        (state, {pos}) =>  {
            let q: Array<Rung> = [...state.ladder.slice(0,pos) , ...state.ladder.slice(pos+1)];
            return { ...state, ladder: q, configVersion: uuid() };
        }),
    on(changeEndFS, (state, args) => {  
        let z : Rung = { ...state.ladder[args.rung], endfs: args.endfs };
        let q : Array<Rung> = [...state.ladder.slice(0,args.rung), z, ...state.ladder.slice(args.rung+1) ];
        console.log(q);
        return {...state, ladder: q, configVersion: uuid() };

    }),
    on(addSimulationResult, ( state, args ) => { 
        console.log(args);
        console.log(args.configVersion);
        console.log(args.results);
        if (args.configVersion == state.configVersion) 
        {
            console.log('Received simulation result');
                return {...state, ladder_result: args.results }; 
        }
    console.log('Error: stale config version received.  Ignored');
    console.log('Current version is: ' + state.configVersion + ' received update for: ' + args.configVersion);
    return {...state }; 
    } )
);
