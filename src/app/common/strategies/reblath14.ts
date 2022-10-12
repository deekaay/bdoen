import {Strategy} from '../objdef/strategy.shape';

var reblath14 :Strategy = {
    name : { en : "Enhance Reblath +14" },
    id: 3,
    requires : { "16001_14" : 1, "10181": 1} ,
    minuse: 0,
    maxuse: 999,
    chance : function(x)
        {
        let v;
        if ( x > 120)
            v = .325;
        else
            v = .025 + .0025 * x;
        return { success: v, failure: 1 - v, break: 0};
        },
    success:
        { "invChange" :  
            { "16001_14" : -1 , 
            "16001_15" : 1  }},
    failure:
        { "gain_fs" : 1 },
    break:
        {  },
    cost:
        { "10181" : 1 }
};

export {reblath14};