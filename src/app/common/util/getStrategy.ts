import {configState} from '../objdef/configstate.shape';
import {Rung} from '../objdef/rung.shape';

export function getStrategy(s: configState, y : number) : Array<number> {

    console.log('Get Strategy for failstack: ' + y);
    console.log(s.ladder.filter((x : Rung) => { return x.startfs <= y && x.endfs >= y } ));
    return s.ladder.filter((x : Rung) => { return x.startfs <= y && x.endfs >= y } )[0].strategy;
}