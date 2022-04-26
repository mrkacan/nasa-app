import {Action} from 'redux';

const GET_MEDIAS = 'GET_MEDIAS';
const GET_MEDIAS_SUCCESS = 'GET_MEDIAS_SUCCESS';
const GET_MEDIAS_FAILURE = 'GET_MEDIAS_FAILURE';

export interface GetMediasAction extends Action {
    type: typeof GET_MEDIAS;
    payload: {
        yearEnd: string;
        yearStart: string;
    }
}

interface GetMediasSuccessAction extends Action {
    type: typeof GET_MEDIAS_SUCCESS;
    payload: {
        data: MediaItem[];
    };
}

interface GetMediasErrorAction extends Action {
    type: typeof GET_MEDIAS_FAILURE;
    payload: {
        error: string;
    };
}

export type MediasActionTypes =
    | GetMediasAction
    | GetMediasSuccessAction
    | GetMediasErrorAction

export type MediasState = {
    data: MediaItem[];
    isLoading: boolean;
    error: string;
}

export interface MediaItem {
    album: string[];
    center: string;
    date_created: Date;
    description: string;
    keywords: string[];
    images: string[];
    location: string;
    media_type: string;
    nasa_id: string;
    photographer: string;
    title: string;
}

export interface MediaItemResponse {
    data: MediaItem[];
    href: string;
    links: string[]
}

export type MediasAPIResponse = {
    collection: {
        items: MediaItemResponse[]
    }
}

export {
    GET_MEDIAS,
    GET_MEDIAS_SUCCESS,
    GET_MEDIAS_FAILURE,
};
