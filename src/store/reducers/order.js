import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    order: [],
    loading: false,
    purchased: false,
    orders: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = updateObject(action.orderData, { id: action.orderId });
            return updateObject(state, {
                loading: false,
                purchased: true,
                order: state.order.concat(newOrder)
            });
        case actionTypes.PURCHASE_BURGER_FAIL:
            return updateObject(state, { loading: false });
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, { loading: true });
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, { purchased: false });
        case actionTypes.FETCH_ORDER_START:
            return updateObject(state, { loading: true });
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return updateObject(state, { orders: action.ordersData, loading: false });
        case actionTypes.FETCH_ORDERS_FAIL:
            return updateObject(state, { loading: false });
        default: {
            return state;
        }
    }
}

export default reducer;