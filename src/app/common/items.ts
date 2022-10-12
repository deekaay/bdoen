import * as x1 from './items/16001_14'
import * as x2 from './items/10181'
import {Item} from './objdef/item.shape';

interface items_t
{
    [index : string] : Item 
}

export const items : items_t  = { 
          "16001_14" : x1.s,
          "10181" : x2.s
 };