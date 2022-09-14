import { actionTypes } from "../constants/action-types";

export const productReducer = (state=[], { type, payload }) => {
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return payload

        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case actionTypes.SELECTED_PRODUCT:
            return payload

        default:
            return state;
    }
}

export const setCurrentUserReducer = (state={}, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_CURRENT_USER:
            return payload

        default:
            return state;
    }
}