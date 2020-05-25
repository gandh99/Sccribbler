import { getShareDeleteNote } from '../actionTypes'
import { INote } from '../../interfaces/notes'

const initialState = {
    allNotes: [],
    deletedNote: {},
    shareNote: {}
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case getShareDeleteNote.GET_ALL_NOTES_SUCCESS:
            return {
                ...state,
                allNotes: action.payload
            }
        case getShareDeleteNote.GET_ALL_NOTES_FAIL:
            return {
                ...state,
                allNotes: []
            }
        case getShareDeleteNote.SHARE_NOTE_SUCCESS:
            return {
                ...state,
                sharedNote: action.payload
            }
        case getShareDeleteNote.SHARE_NOTE_FAIL:
            return {
                ...state,
                sharedNote: {}
            }
        case getShareDeleteNote.DELETE_NOTE_SUCCESS:
            return {
                ...state,
                deletedNote: action.payload,
                allNotes: state.allNotes.filter((note: INote) => note.noteId !== action.payload.noteId)
            }
        case getShareDeleteNote.DELETE_NOTE_FAIL:
            return {
                ...state,
                deletedNote: {}
            }
        default:
            return state
    }
}