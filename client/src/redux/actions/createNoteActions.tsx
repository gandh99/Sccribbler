import { createNote } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'
import { IMessage } from '../../utils/note'

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

export const createMessageAction = (message: IMessage) => (dispatch: any) => {
    dispatch({
        type: createNote.CREATE_MESSAGE,
        payload: message
    })
}