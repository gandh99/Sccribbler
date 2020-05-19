import { createNote } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'

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