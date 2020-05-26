import { notifications } from '../actionTypes'
import { ISharedNote } from '../../interfaces/notifications'

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
        case notifications.MARK_SHARED_NOTES_AS_SEEN_SUCCESS:
        case notifications.RESPOND_TO_SHARED_NOTE_SUCCESS:
            return {
                ...state,
                allNotesSharedWithMe: state.allNotesSharedWithMe
                    .filter((sharedNote: ISharedNote) => sharedNote.shareNoteNotificationId !== action.payload.shareNoteNotificationId)
            }
        case notifications.MARK_SHARED_NOTES_AS_SEEN_FAIL:
        case notifications.RESPOND_TO_SHARED_NOTE_FAIL:
        default:
            return state
    }
}