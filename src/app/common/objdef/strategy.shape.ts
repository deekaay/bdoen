export interface Strategy 
{
    name : { en : string },
    id: number,
    requires : object,
    minuse: number,
    maxuse: number,
    chance(x: number) : object, 
    success: object,
    failure : object,
    break: object,
    cost: object 
}