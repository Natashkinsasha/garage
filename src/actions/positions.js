import * as types from '../actions/types';

export function addPositions(positions) {
    return {
        type: types.ADD_POSITIONS,
        positions,
    };
}

