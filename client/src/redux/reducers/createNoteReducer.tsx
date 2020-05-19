import { createNote } from '../actionTypes'

const initialState = {
    isRequestingTimestamp: false,
    timestamp: ''
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case createNote.INITIATE_TIMESTAMP_REQUEST:
            return {
                ...state,
                isRequestingTimestamp: true
            }
        case createNote.FULFILL_TIMESTAMP_REQUEST:
            return {
                ...state,
                isRequestingTimestamp: false,
                timestamp: action.payload
            }
        case createNote.RESET_TIMESTAMP:
            return {
                ...state,
                isRequestingTimestamp: false,
                timestamp: ''
            }
        default:
            return state
    }
}