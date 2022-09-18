import {advlog} from './advlog';
import {valkscry} from './valkscry';
import {Strategy} from '../objdef/strategy.shape';

let allstrats: Array<Strategy> = [ 
    advlog,
    valkscry
];

export { allstrats } ;