import { TechStoreState, initialState } from './techStore.state';
import { techStroeActions } from './techStore.actions'


export function Reducer  (state: TechStoreState = initialState, action): TechStoreState {
    console.log("ACTION: ", action)
    let newState = {...state};
    let done = false;
    switch(action.type) {
        // ADD OR RETURN ITEMS
        case techStroeActions.Return_Item:
        case techStroeActions.Add_Item:
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
            console.log("Items before ", newState.items);
            let items = newState.items.map(item => {
                if(quantity > 0 && item.name == action.payload.name) {
                    if(item.quantity >= quantity) {
                        item.quantity -= quantity;
                        quantity = 0;
                        if(item.quantity == 0)
                            return undefined;
                    }
                    else {
                        quantity -= item.quantity;
                        return undefined;
                    }
                }
                return item;
            })
            console.log("Items after ", items);
            newState.items = [];
            items.map(item => {
                if(item != undefined) {
                    newState.items.push(item);
                }
            })
            return newState;

        default: 
            return state
    }
}