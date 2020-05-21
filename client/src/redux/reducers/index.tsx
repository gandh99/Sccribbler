import { combineReducers } from 'redux'
import authentication from './authenticationReducer'
import error from './errorReducer'
import globalDisplay from './globalDisplayReducer'
import createNote from './createNoteReducer'
import getNote from './getNoteReducer'

export default combineReducers({
    authentication,
    error,
    globalDisplay,
    createNote,
    getNote
})