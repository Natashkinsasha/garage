import * as types from '../actions/types';

export function loginSuccess(user, response) {
    return {
        type: types.LOGIN_SUCCESS,
        response,
        user,
    };
}


export function loginFailure(response) {
    return {
        type: types.LOGIN_FAILURE,
        response,
    };
}


export function logout() {
    return {
        type: types.LOGOUT,
    };
}

export function singUpFailure(response) {
    return {
        type: types.SINGUP_FAILURE,
        response,
    };
}

export function singUpSuccess(user, response) {
    return {
        type: types.SINGUP_SUCCESS,
        response,
        user,
    };
};


