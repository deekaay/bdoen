import {advlog} from './advlog';
import {valkscry} from './valkscry';
import {reblath14} from './reblath14';
import {Strategy} from '../objdef/strategy.shape';

let allstrats: Array<Strategy> = [ 
    advlog,
    valkscry,
    reblath14
];

export { allstrats } ;