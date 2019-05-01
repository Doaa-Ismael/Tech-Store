import { TechItem } from './../../shared/models/techItem.model'

export interface TechStoreState {
    items: TechItem[];
}



export const initialState: TechStoreState =  {
    items: [
        {name: 'A', value: 1, quantity: 3},
        {name: 'B', value: 3, quantity: 5},
        {name: 'C', value: 4, quantity: 3},
        {name: 'A', value: 2, quantity: 2},
        {name: 'D', value: 1, quantity: 3}
    ]
}