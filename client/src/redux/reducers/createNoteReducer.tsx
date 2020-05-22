import { createNote } from '../actionTypes'
import { IScribble, INote } from '../../interfaces/notes'
import { sortByTimeElapsed } from '../../utils/createNote'

interface IInitialState {
    newScribble?: IScribble,
    allScribbles?: IScribble[],
    savedNote?: INote
}

const initialState = {
    // For exchanging time elapsed and recording the video's metadata
    isRequestingTimeElapsed: false,
    timeElapsed: 0,
    duration: 0,

    // For recording data related to the note itself
    title: '',
    videoUrl: '',
    newScribble: { scribble_id: '', timeElapsed: 0, text: '' },
    allScribbles: [],

    // For checking if the note was saved to the database
    savedNote: { note_id: '', title: '', videoUrl: '', allScribbles: [] }
} as IInitialState      // Necessary format to include properties not defined in IInitialState

export default function (state = initialState, action: any) {
    switch (action.type) {
        case createNote.REQUEST_FOR_TIME_ELAPSED:
            return {
                ...state,
                isRequestingTimeElapsed: true
            }
        case createNote.RESPOND_WITH_TIME_ELAPSED:
            return {
                ...state,
                isRequestingTimeElapsed: false,
                timeElapsed: action.payload
            }
        case createNote.RESET_TIME_ELAPSED:
            return {
                ...state,
                isRequestingTimeElapsed: false,
                timeElapsed: 0
            }
        case createNote.SET_DURATION:
            return {
                ...state,
                duration: action.payload
            }
        case createNote.RESET_DURATION:
            return {
                ...state,
                duration: 0
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
                    .sort((s1: IScribble, s2: IScribble) => sortByTimeElapsed(s1.timeElapsed, s2.timeElapsed))
            }
        case createNote.SAVE_NOTE_TO_DATABASE_SUCCESS:
            return {
                ...state,
                savedNote: action.payload
            }
        case createNote.SAVE_NOTE_TO_DATABASE_FAIL:
            return {
                ...state,
                savedNote: {}
            }
        case createNote.CLEAR_NOTE_DATA:
            return {
                ...state,
                title: '',
                videoUrl: '',
                newScribble: { scribble_id: '', timeElapsed: '', text: '' },
                allScribbles: [],
            }
        default:
            return state
    }
}