import { createNote } from '../actionTypes'
import { IScribble } from '../../interfaces/notes'
import { sortByTimestamp } from '../../utils/createNote'

interface IInitialState {
    newScribble?: IScribble,
    allScribbles?: IScribble[]
}

const initialState = {
    // For exchanging timestamps
    isRequestingTimestamp: false,
    timestamp: '',

    // For recording data related to the note itself
    title: '',
    videoUrl: '',
    newScribble: { scribble_id: '', timestamp: '', text: '' },
    allScribbles: []
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
        case createNote.CREATE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case createNote.CREATE_VIDEO_URL:
            return {
                ...state,
                videoUrl: action.payload
            }
        case createNote.CREATE_SCRIBBLE:
            return {
                ...state,
                newScribble: action.payload,
                allScribbles: [...state.allScribbles!, action.payload]
                    .sort((m1: IScribble, m2: IScribble) => sortByTimestamp(m1.timestamp, m2.timestamp))
            }
        default:
            return state
    }
}