import { combineReducers } from 'redux'
import { productReducer, selectedProductReducer } from './productReducer'
import { setCurrentUserReducer, setOtpReducer } from './userReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProductReducer: selectedProductReducer,
    setCurrentUserReducer: setCurrentUserReducer,
    setOtpReducer: setOtpReducer,
})

export default reducers