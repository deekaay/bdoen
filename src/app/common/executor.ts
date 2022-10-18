import { allstrats } from "./strategies/strategies";
import { mergeactionsandcost } from './util/mergeactionandcost';
import { items } from './items';
import {configState} from './objdef/configstate.shape';
import {ladder_result} from './objdef/ladder_result.shape';
import { Strategy} from './objdef/strategy.shape';
import {probObj} from './objdef/probobj.shape';
import {actionLog} from './objdef/actionLog.shape';
import {itemCollection} from './objdef/itemCollection.shape';
import {tryLog} from './objdef/tryLog.shape';
import {getStrategy} from './util/getStrategy';


export function execute_metastrategy(state : configState) : Array<ladder_result>
{

    console.log('Execute metastrategy');
    console.log(state);

    let ladder_results : Array<ladder_result>;
    let total_cost : number;
    ladder_results = [ ];

    let strategy_res = null;

    while (ladder_results.length < state.numIterations) // This loop represents a distinct ladder attempt.
    {
        console.log("Ladder attempt: " + (ladder_results.length + 1));
        ladder_results.push(execute_ladderattempt(state));
    } 

    console.log(ladder_results);
    return ladder_results;

    total_cost = ladder_results.reduce((s, x) => s+x.cost, 0 );
}


function execute_ladderattempt(state : configState) : ladder_result
    {
        console.log('Execute ladder attempt');
        console.log("Target: " + state.targetFailStacks);
        let z : ladder_result;
        let ladder_log : Array<tryLog> = [];
        let ladder_inventory = { fs: 0 };
        let ladder_cost = 0;

        let cur_attempt = 1;
        let current_fs : number = 0;

        let ladder_attempt_cost = 0;
        console.log(state);
        console.log(state.targetFailStacks);

        while (current_fs <state.targetFailStacks  && cur_attempt <= state.maxAttempts) // This means we're within a ladder.
        {
            let step_strategy : Array<number> = getStrategy(state, current_fs);
            let current_strategy : number = step_strategy[0];
            console.log(current_strategy);
            console.log("Current fs: " + current_fs + " trying strategy" + allstrats[current_strategy].name.en);
            let step_log : tryLog = trystrategy(current_strategy, ladder_inventory);
            //let try_result = step_log.step_result;

/*
            if (try_result == "Failure")
                current_fs += res.actions["gain_fs"];
            if (try_result == "Success") {
                current_fs = 0;
                cur_attempt++;
                res.actions["lose_all_fs"] = 1;
            }
        */
        current_fs = ladder_inventory.fs;
        ladder_log.push(step_log);
        //ladder_attempt_cost += step_log.step_cost;
        }
        

        return { stepLogs : ladder_log, inventory: ladder_inventory, cost: ladder_attempt_cost};

    }

function trystrategy(stratIndex : number, inventory : any): tryLog {
    console.log("Try stratIndex: " + stratIndex + " fs: " + inventory.fs);
    let s : Strategy = allstrats[stratIndex];
    let prob : probObj = s.chance(inventory.fs);
    let r : number = Math.random();
    //console.log("r: " + r);
    //console.log(prob);

    let step_action_log : Array<actionLog> = [ ];
    let step_cost = 0;
    let incoming_fs = inventory.fs;

    let step_log = [ ];

    // do we have the prerequisite items?

    let needed = allstrats[stratIndex].requires;

    let v;


    for (v in needed) {
        if (!inventory[v])
            inventory[v] = 0;

        //console.log('I need: ' + needed[v] + ' of ' + v);
        //console.log('I have: ' + inventory[v] + ' of ' + v);
        for (let j = 1; j <= (needed[v] - inventory[v]); j++) {
            //console.log(v);
            //console.log(items[v]);
            //console.log(items);
            step_action_log.push({ verb : "Acquire", invChange : items[v].acquire.invChange }); // Purchase stuff.
            //console.log('Acquired: ' + items[v]);
            inventory[v]++;
        }
    }

    let step_result = "";

    if (r <= prob.success) {
        // Success.
        console.log('Success');
        step_result = 'Success';
        step_action_log.push( { verb : "Success", invChange : s.success.invChange ?? { }  } );
        inventory.fs = 0;
        let qq;
        (Object.keys(allstrats[stratIndex].success.invChange!) as (keyof itemCollection)[]  ).map( x => {
            if (!inventory[x]) 
                inventory[x] = 0;
            inventory[x] += allstrats[stratIndex]?.success?.invChange![x] ?? 0 ;
        });

    }
    else if (r > prob.success && r <= (prob.success + prob.failure)) {
        // Fail, no blowup.
        console.log('Failure');
        step_result = 'Failure';
        step_action_log.push( {  verb : "Failed", invChange : s.failure.invChange ?? { } } );
        inventory.fs += s.failure.gain_fs;
        //console.log('gain fs:' + s.failure.gain_fs);
        //console.log('New fs:' + inventory.fs);
    }
    else {
        step_result = "Other";
        //Other
    }
    let vv;
    for (vv in allstrats[stratIndex].cost)
        {
        if (!inventory[vv])
            inventory[vv] = 0;
        inventory[vv] -= allstrats[stratIndex].cost[vv];
        }

    console.log("zz:" + JSON.stringify({ step_log : step_action_log, step_cost: step_cost, step_result : step_result }));
    //return { verb : "xx", invChange: step_cost };
    return { step_log : step_action_log, step_cost: step_cost, step_result: step_result, incoming_fs : incoming_fs, result_fs : inventory.fs };
}