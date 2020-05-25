import { notifications } from '../actionTypes'

const initialState = {
    sharedNote: {}
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case notifications.SHARE_NOTE_SUCCESS:
            return {
                ...state,
                sharedNote: action.payload
            }
        case notifications.SHARE_NOTE_FAIL:
            return {
                ...state,
                sharedNote: {}
            }
        default:
            return state
    }
}