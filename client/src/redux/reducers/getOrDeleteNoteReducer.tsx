import { getOrDeleteNote } from '../actionTypes'
import { INote } from '../../interfaces/notes'

const initialState = {
    allNotes: [],
    deletedNote: {},
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case getOrDeleteNote.GET_ALL_NOTES_SUCCESS:
            return {
                ...state,
                allNotes: action.payload
            }
        case getOrDeleteNote.GET_ALL_NOTES_FAIL:
            return {
                ...state,
                allNotes: []
            }
        case getOrDeleteNote.DELETE_NOTE_SUCCESS:
            return {
                ...state,
                deletedNote: action.payload,
                allNotes: state.allNotes.filter((note: INote) => note.noteId !== action.payload.noteId)
            }
        case getOrDeleteNote.DELETE_NOTE_FAIL:
            return {
                ...state,
                deletedNote: {}
            }
        default:
            return state
    }
}