import { combineReducers } from 'redux'
import authentication from './authenticationReducer'
import error from './errorReducer'
import globalDisplay from './globalDisplayReducer'
import videoPlayer from './videoPlayerReducer'
import saveNote from './saveNoteReducer'
import getOrDeleteNote from './getOrDeleteNoteReducer'
import category from './categoryReducer'
import notifications from './notificationsReducer'

export default combineReducers({
    authentication,
    error,
    globalDisplay,
    videoPlayer,
    saveNote,
    getOrDeleteNote,
    category,
    notifications
})