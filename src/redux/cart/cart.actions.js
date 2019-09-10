import CartActionTypes from './cart.styles';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

export const cleanItemFromCart = item => ({
    type: CartActionTypes.CLEAN_ITEM_FROM_CART,
    payload: item
})
