import * as types from '../actions/types';

const initialState = {
    user: {
        roles: ["GUEST_ROLE"]
    },
    isAuthorized: false,
    response: null
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {...state, user: action.user, isAuthorized: true};
        case types.LOGIN_UNSUCCESS:
            return {...state, response: action.response};
        case types.LOGOUT:
            return initialState;
        case types.SINGUP_SUCCESS:
            return {...state, user: action.user, isAuthorized: true};
        case types.SINGUP_UNSUCCESS:
            return {...state, response: action.response};
    }
    return state;
}

export default userReducer;