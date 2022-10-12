import {Item} from '../objdef/item.shape';


export const s :Item  =  {
    name : {
        en : "Black Stone (Armor)"
    },
    acquire : { description : { en : "Buy from marketplace" },
                action : "Buy",
                invChange : {"-999" : -180000,
                    "10181" : 1 } 
               }
}