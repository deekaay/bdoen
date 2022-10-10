import {Strategy} from '../objdef/strategy.shape';

var valkscry :Strategy = {
    name : { en : "Valk's Cry" },
    id: 2,
    requires : { },
    minuse: 0,
    maxuse: 14,
    chance : function(x : number)
        {
        return { success: 0, failure: 1, break: 0};
        },
    success:
        { },
    failure:
    { "gain_fs" : 1 },
    break:
        {   },
    cost:
    { }
};
export {valkscry};