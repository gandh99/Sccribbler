import { combineReducers } from 'redux'
import authentication from './authenticationReducer'
import error from './errorReducer'
import globalDisplay from './globalDisplayReducer'
import videoPlayer from './videoPlayerReducer'
import saveNote from './saveNoteReducer'
import getShareDeleteNote from './getShareDeleteNoteReducer'
import category from './categoryReducer'

export default combineReducers({
    authentication,
    error,
    globalDisplay,
    videoPlayer,
    saveNote,
    getShareDeleteNote,
    category
})