import { TechStoreState, initialState } from './techStore.state';
import { techStroeActions } from './techStore.actions'


export function Reducer  (state: TechStoreState = initialState, action): TechStoreState {
    console.log("ACTION: ", action);

    let newState = {...state};
    switch(action.type) {
        // ADD OR RETURN ITEMS
        case techStroeActions.Return_Item:
        case techStroeActions.Add_Item: // O(n)
            let done = false;
            newState.items = newState.items.map(item => { 
                if(item.name == action.payload.name && item.value == action.payload.value) {
                    item.quantity += action.payload.quantity;
                    done = true;
                }
                return item;
            })
            if(!done) {
                newState.items.push(action.payload)
            }
            return newState;

        case techStroeActions.Remove_Item: // Quantity and Name Only
            let quantity = action.payload.quantity;
            let items = [ ...newState.items ];
            newState.items = [];

            // O(n)
            let deleted: boolean;
            items.map(item => {
                deleted = false;
                if(quantity > 0 && item.name == action.payload.name) {
                    if(item.quantity >= quantity) {
                        item.quantity -= quantity;
                        quantity = 0;
                        if(item.quantity == 0) 
                            deleted = true;
                    }
                    else {
                        quantity -= item.quantity;
                        deleted = true;
                    }
                }
                if(!deleted)
                    newState.items.push(item);
            })
            return newState;

        default: 
            return state
    }
}