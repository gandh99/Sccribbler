import { combineReducers } from 'redux'
import authentication from './authenticationReducer'
import error from './errorReducer'
import globalDisplay from './globalDisplayReducer'
import videoPlayer from './videoPlayerReducer'
import saveNote from './saveNoteReducer'
import getNote from './getNoteReducer'
import category from './categoryReducer'

export default combineReducers({
    authentication,
    error,
    globalDisplay,
    videoPlayer,
    saveNote,
    getNote,
    category
})