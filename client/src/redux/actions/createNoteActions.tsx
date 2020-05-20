import { createNote } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'
import { IScribble } from '../../interfaces/notes'

export const initiateTimestampRequestAction = () => (dispatch: any) => {
    dispatch({
        type: createNote.INITIATE_TIMESTAMP_REQUEST
    })
}

export const fulfillTimestampRequestAction = (timestamp: string) => (dispatch: any) => {
    dispatch({
        type: createNote.FULFILL_TIMESTAMP_REQUEST,
        payload: timestamp
    })
}

export const resetTimestampAction = () => (dispatch: any) => {
    dispatch({
        type: createNote.RESET_TIMESTAMP
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
    allScribbles: IScribble[]
) => (dispatch: any) => {
    axios
        .post('/notes/save', { title, videoUrl, allScribbles })
        .then(res => {
            const savedNote = res.data.data
            dispatch({
                type: createNote.SAVE_NOTE_TO_DATABASE_SUCCESS,
                payload: savedNote
            })
        })
        .catch(err => {
            dispatch({
                type: createNote.SAVE_NOTE_TO_DATABASE_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
        })
}