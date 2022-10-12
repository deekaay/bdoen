import { itemCollection } from './itemCollection.shape';

export interface Item {
    name: {
        en: string
    },
    acquire: {
        description: {
            en: string
        },
        action: string,
        invChange: itemCollection
    }
}