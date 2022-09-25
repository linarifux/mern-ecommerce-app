import { actionTypes } from "../constants/action-types";


export const setCurrentUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_CURRENT_USER:
            return payload

        default:
            return state;
    }
}


export const setOtpReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case actionTypes.SET_OTP:
            return payload

        default:
            return state;
    }
}