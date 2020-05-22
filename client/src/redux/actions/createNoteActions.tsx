import { createNote } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'
import { IScribble } from '../../interfaces/notes'

export const requestForTimeElapsedAction = () => (dispatch: any) => {
    dispatch({
        type: createNote.REQUEST_FOR_TIME_ELAPSED
    })
}

export const respondWithTimesElapsedAction = (timeElapsed: number) => (dispatch: any) => {
    dispatch({
        type: createNote.RESPOND_WITH_TIME_ELAPSED,
        payload: timeElapsed
    })
}

export const resetTimeElapsedAction = () => (dispatch: any) => {
    dispatch({
        type: createNote.RESET_TIME_ELAPSED
    })
}

export const setDurationAction = (duration: number) => (dispatch: any) => {
    dispatch({
        type: createNote.SET_DURATION,
        payload: duration
    })
}

export const resetDurationAction = () => (dispatch: any) => {
    dispatch({
        type: createNote.RESET_DURATION
    })
}

export const createTitleAction = (title: string) => (dispatch: any) => {
    dispatch({
        type: createNote.CREATE_TITLE,
        payload: title
    })
}

export const createVideoUrlAction = (videoUrl: string) => (dispatch: any) => {
    dispatch({
        type: createNote.CREATE_VIDEO_URL,
        payload: videoUrl
    })
}

export const createScribbleAction = (scribble: IScribble) => (dispatch: any) => {
    dispatch({
        type: createNote.CREATE_SCRIBBLE,
        payload: scribble
    })
}

export const saveNoteToDatabaseAction = (
    title: string,
    videoUrl: string,
    allScribbles: IScribble[],
    success: Function,
    error: Function
) => (dispatch: any) => {
    axios
        .post('/notes/save', { title, videoUrl, allScribbles })
        .then(res => {
            const savedNote = res.data.data
            dispatch({
                type: createNote.SAVE_NOTE_TO_DATABASE_SUCCESS,
                payload: savedNote
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: createNote.SAVE_NOTE_TO_DATABASE_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error()
        })
}

export const clearNoteDataAction = () => (dispatch: any) => {
    dispatch({
        type: createNote.CLEAR_NOTE_DATA,
    })
}