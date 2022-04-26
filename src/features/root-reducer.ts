import {combineReducers} from 'redux';
import {reducer as mediasReducer} from './medias/reducers';

const reducer = combineReducers({
    medias: mediasReducer,
});

export {reducer};
