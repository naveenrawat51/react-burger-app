import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_START:
            return updateObject(state, {error: null, loading: true});
        case actionTypes.AUTH_SUCCESS:
            console.log('nkz: ', action);
            return updateObject(state, {
                token: action.data.idToken,
                userId: action.data.localId,
                error: null,
                loading: false
            });
        case actionTypes.AUTH_FAIL:
            let errorMessage;
            switch(action.error){
                case 'EMAIL_EXISTS': errorMessage = 'Email Already exist please login';
                break;
                case 'INVALID_PASSWORD': errorMessage = 'Invalid Password';
                break;
                case 'EMAIL_NOT_FOUND': errorMessage = 'Email not found - Please register First';
                break;
                default: errorMessage = null
            }
            return updateObject(state, { error: errorMessage, loading: false})
        default:
            return state;
    }
}

export default reducer;