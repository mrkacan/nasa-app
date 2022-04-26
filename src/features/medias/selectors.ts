import * as moviesTypes from "./types";

export const getMediasSelector = ({medias}: {
    medias: moviesTypes.MediasState,
}) => {
    return {
        data: medias.data,
        isLoading: medias.isLoading,
        error: medias.error
    }
}

export const getMediaDetail = id => ({medias}: {
    medias: moviesTypes.MediasState,
}) => medias.data.find(item => item.nasa_id === id);
