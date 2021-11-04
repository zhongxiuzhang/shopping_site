// Use redux

export const initialState = {
    login: false,
    basket: [],
}

//Selector

export const getBasketTotal = (basket) => {
    return (basket.reduce((amount, item) => item.price * item.amount + amount, 0));
}

export const getBasketAmount = (basket) => {
    return (basket.reduce((amount, item) => item.amount + amount, 0));
}

export const getLogStatus = (login) => {
    if (login) {
        return 'Log out';
    } else {
        return 'Sign in';
    }
}

const reducer = (state = initialState, action) => {
    let index;
    let newBasket;
    switch(action.type) {
        case "ADD_TO_BASKET":
            index = state.basket.findIndex(
                (basketItem) => basketItem.id == action.item.id
            );

            if (index>=0) {
                newBasket = [...state.basket];
                newBasket[index].amount += 1;
            } else {
                newBasket = [...state.basket, action.item];
            }

            return {
                ...state, 
                basket: newBasket
            };
            break;
        case "REMOVE_FROM_BASKET":
            index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            newBasket = [...state.basket];

            if (index>=0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product(id: ${action.id}) as its not in the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        case "ADD_ITEM":
            index = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            );

            newBasket = [...state.basket];

            if (index>=0) {
                newBasket[index].amount += 1;
            } 

            return {
                ...state, 
                basket: newBasket
            };
        case "REDUCE_ITEM":
            index = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            );

            newBasket = [...state.basket];

            if (index>=0 && newBasket[index].amount>1) {
                newBasket[index].amount -= 1;
                // alert('product exist');
            } 

            return {
                ...state, 
                basket: newBasket
            };
        case "SIGN_IN":
            return {
                ...state,
                login: true
            }
        case "LOG_OUT":
            return {
                ...state,
                login: false
            }
        default:
            return state;
    }
}


export default reducer;