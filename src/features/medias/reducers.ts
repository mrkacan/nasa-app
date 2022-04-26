import * as types from './types';

const initialState: types.MediasState = {
    data: [],
    isLoading: false,
    error: ''
};

const reducer = (state = initialState, action: types.MediasActionTypes) => {
    switch (action.type) {
    case types.GET_MEDIAS: {
        return {
            ...state,
            isLoading: true
        };
    }
    case types.GET_MEDIAS_SUCCESS: {
        return {
            ...state,
            isLoading: false,
            data: action.payload.data,
        };
    }
    case types.GET_MEDIAS_FAILURE: {
        return {
            ...state,
            isLoading: false,
            error: action.payload.error
        };
    }
    default:
        return state;
    }
};

export {reducer};
