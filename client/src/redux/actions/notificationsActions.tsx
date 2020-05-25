import { notifications } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'
import { INote } from '../../interfaces/notes'

export const shareNoteAction = (note: INote, recipient: string, success: Function, error: Function) => (dispatch: any) => {
    axios
        .post('/notifications/notes/share', { note, recipient })
        .then(res => {
            dispatch({
                type: notifications.SHARE_NOTE_SUCCESS,
                payload: res.data
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: notifications.SHARE_NOTE_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error(err.response.data)
        })
}