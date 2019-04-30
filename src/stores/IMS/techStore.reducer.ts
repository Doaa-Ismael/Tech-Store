import { TechStoreState, initialState } from './techStore.state';
import { techStroeActions } from './techStore.actions'


export function Reducer  (state: TechStoreState = initialState, action): TechStoreState {

    switch(action.type) {
        case techStroeActions.Add_Item: 
            return state;



        default: 
            return state
    }
}