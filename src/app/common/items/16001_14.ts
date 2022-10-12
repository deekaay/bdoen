import {Item} from '../objdef/item.shape';

export const s : Item =  {
    name : {
        en : "Reblath Shoes +14"
    },
    acquire : { description : { en : "Cleanse +15"} ,  
                action : "Cleanse",
                invChange : { "-999" : -1000000,
                "16001_14" : 1  } 
    }
}