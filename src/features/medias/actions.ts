import * as types from './types';
import {MediaItem} from "./types";

const getMedias = (yearStart: string, yearEnd: string,): types.MediasActionTypes => {
    return {
        type: types.GET_MEDIAS,
        payload: {
            yearEnd,
            yearStart,
        },
    };
};

const getMediasSuccess = (data: MediaItem[]): types.MediasActionTypes => {
    return {
        type: types.GET_MEDIAS_SUCCESS,
        payload: {
            data,
        },
    };
};
const getMediasError = (error: string): types.MediasActionTypes => {
    return {
        type: types.GET_MEDIAS_FAILURE,
        payload: {
            error,
        },
    };
};

export {
    getMedias,
    getMediasSuccess
};
