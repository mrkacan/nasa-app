import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {reducer} from '../features/root-reducer';
import {handler as mediasSaga} from '../features/medias/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mediasSaga);

export {store};
