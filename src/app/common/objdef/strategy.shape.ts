import {probObj} from './probobj.shape';
import {itemCollection} from './itemCollection.shape';

export interface Strategy 
{
    name : { en : string },
    id: number,
    requires : itemCollection,
    minuse: number,
    maxuse: number,
    chance(x: number) : probObj, 
    success:  { invChange? : itemCollection },
    failure : { invChange ? : itemCollection, gain_fs?: number } , 
    break:  { gain? : itemCollection, lose?: itemCollection}, 
    cost: itemCollection
}