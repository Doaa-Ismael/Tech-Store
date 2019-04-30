import { TechItem } from './../../shared/models/techItem.model'

export interface TechStoreState {
    techItems: TechItem[];
}



export const initialState: TechStoreState =  {
    techItems: [
        { name: 'A', itemList: [ { value: 1, quantity: 2 }, { value: 2, quantity: 2} ]}
    ]
}