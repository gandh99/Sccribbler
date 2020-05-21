import { getNote } from '../actionTypes'
import { IScribble, INote } from '../../interfaces/notes'

const initialState = {
    allNotes: []
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case getNote.GET_ALL_NOTES_SUCCESS:
            return {
                ...state,
                allNotes: action.payload
            }
        case getNote.GET_ALL_NOTES_FAIL:
        default:
            return state
    }
}