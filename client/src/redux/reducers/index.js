import {combineReducers} from 'redux'
import { productReducer, selectedProductReducer, setCurrentUserReducer } from './productReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProductReducer: selectedProductReducer,
    setCurrentUserReducer: setCurrentUserReducer
})

export default reducers