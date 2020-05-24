import { saveNote } from '../actionTypes'
import { IScribble, INote } from '../../interfaces/notes'
import { sortByTimeElapsed } from '../../utils/createNote'

interface IInitialState {
    newScribble?: IScribble,
    allScribbles?: IScribble[],
    savedNote?: INote
}

const initialState = {
    // For recording data related to the note itself
    noteId: -1,     // will only be positive if the note already exists
    title: '',
    videoUrl: '',
    newScribble: { scribbleId: '', timeElapsed: 0, text: '' },
    allScribbles: [],

    // For checking if the note was saved to the database
    savedNote: { noteId: '', title: '', videoUrl: '', allScribbles: [] }
} as IInitialState      // Necessary format to include properties not defined in IInitialState

export default function (state = initialState, action: any) {
    switch (action.type) {
        case saveNote.SAVE_NOTEID:
            return {
                ...state,
                noteId: action.payload
            }
        case saveNote.SAVE_TITLE:
            return {
                ...state,
                title: action.payload
            }
        case saveNote.SAVE_VIDEO_URL:
            return {
                ...state,
                videoUrl: action.payload
            }
        case saveNote.SAVE_SCRIBBLE:
            return {
                ...state,
                newScribble: action.payload,
                allScribbles: [...state.allScribbles!, action.payload]
                    .sort((s1: IScribble, s2: IScribble) => sortByTimeElapsed(s1.timeElapsed, s2.timeElapsed))
            }
        case saveNote.SAVE_ALL_SCRIBBLES:
            return {
                ...state,
                allScribbles: action.payload
            }
        case saveNote.SAVE_NOTE_TO_DATABASE_SUCCESS:
            return {
                ...state,
                savedNote: action.payload
            }
        case saveNote.SAVE_NOTE_TO_DATABASE_FAIL:
            return {
                ...state,
                savedNote: {}
            }
        case saveNote.CLEAR_NOTE_DATA:
            return {
                ...state,
                noteId: -1,
                title: '',
                videoUrl: '',
                newScribble: { scribble_id: '', timeElapsed: '', text: '' },
                allScribbles: [],
            }
        default:
            return state
    }
}