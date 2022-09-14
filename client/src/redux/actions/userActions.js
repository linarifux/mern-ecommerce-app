import { actionTypes } from '../constants/action-types'

const { SET_CURRENT_USER } = actionTypes

export const setCurrentUser = user => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}