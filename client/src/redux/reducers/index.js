import {combineReducers} from 'redux'
import { productReducer, selectedProductReducer } from './productReducer'

const reducers = combineReducers({
    allProducts: productReducer,
    selectedProductReducer: selectedProductReducer
})

export default reducers