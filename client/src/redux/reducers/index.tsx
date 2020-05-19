import { combineReducers } from 'redux'
import authentication from './authenticationReducer'
import error from './errorReducer'
import globalNotification from './globalNotificationReducer'
import createNote from './createNoteReducer'

export default combineReducers({
    authentication,
    error,
    globalNotification,
    createNote
})