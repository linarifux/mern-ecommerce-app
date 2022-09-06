import {createStore} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers/index'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: 'reducers'
}


const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer, {}, window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__())

export const persistor = persistStore(store)
