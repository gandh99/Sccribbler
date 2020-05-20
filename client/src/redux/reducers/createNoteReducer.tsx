import { createNote } from '../actionTypes'
import { IMessage } from '../../utils/note'
import { sortByTimestamp } from '../../utils/createNote'

interface IInitialState {
    newMessage?: IMessage,
    allMessages?: IMessage[]
}

const initialState = {
    // For exchanging timestamps
    isRequestingTimestamp: false,
    timestamp: '',

    // For recording the messages written by the user
    newMessage: { uuid: '', timestamp: '', text: '' },
    allMessages: []
} as IInitialState      // Necessary format to include properties not defined in IInitialState

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
        case createNote.CREATE_MESSAGE:
            return {
                ...state,
                newMessage: action.payload,
                allMessages: [...state.allMessages!, action.payload]
                    .sort((m1: IMessage, m2: IMessage) => sortByTimestamp(m1.timestamp, m2.timestamp))
            }
        default:
            return state
    }
}