import {all, call, put, takeEvery} from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';
import {GET_MEDIAS} from './types';
import {GET_SEARCH_DATA_API} from '../../api/api';

function* handler() {
    yield takeEvery(GET_MEDIAS, getMedias);
}

function* getMedias(action: types.GetMediasAction) {
    try {
        const response: types.MediasAPIResponse = yield call(GET_SEARCH_DATA_API, {
            yearEnd: action.payload.yearEnd,
            yearStart: action.payload.yearStart,
        });
        if (response) {
            const mediaData: types.MediaItem[] = yield all(
                response?.collection?.items?.map(function* (media) {
                    const images = yield call(() => fetch(media?.href).then((response) => response.json()))
                    return {
                        ...media?.data?.[0],
                        images
                    };
                }),
            );

            yield put(actions.getMediasSuccess(mediaData));
        }

    } catch (error) {
        console.error(error);
    }
}

export {handler};
