import * as types from '../actions/types';

const initialState = {
    positions: []
};

const positionsReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_POSITIONS:
            return {...state, positions: action.positions};
    }
    return state;
};

export default positionsReducer;
