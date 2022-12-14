import {Strategy} from '../objdef/strategy.shape';

var advlog :Strategy = {
    name : { en : "Free Failstack (Adv Log)" },
    id: 1,
    requires : { },
    minuse: 0,
    maxuse: 4,
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
export {advlog};