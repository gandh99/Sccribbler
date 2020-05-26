import { notifications } from '../actionTypes'

const initialState = {
    sharedNote: {},
    allNotesSharedWithMe: []
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
        case notifications.GET_SHARED_NOTES_SUCCESS:
            return {
                ...state,
                allNotesSharedWithMe: action.payload
            }
        case notifications.GET_SHARED_NOTES_FAIL:
            return {
                ...state,
                allNotesSharedWithMe: {}
            }
        default:
            return state
    }
}