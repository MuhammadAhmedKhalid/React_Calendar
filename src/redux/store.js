import { rootReducers } from './rootReducer'
import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { eventsSaga } from './events/saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducers,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(eventsSaga)