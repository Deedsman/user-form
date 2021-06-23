import {combineReducers,compose,createStore,applyMiddleware} from 'redux';
import createSagaMiddleWare from 'redux-saga'
import userReducer from './userReducer';
import  rootWatcher  from './saga';

const sagaMiddleWare = createSagaMiddleWare();

const rootReducer = combineReducers({
    users:userReducer,
})


const store = compose(
    applyMiddleware(sagaMiddleWare)
    ,window.devToolsExtension && window.devToolsExtension(),
    )(createStore)(rootReducer)

sagaMiddleWare.run(rootWatcher)

export default store;