import { getNote } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'

export const getAllNotesAction = () => (dispatch: any) => {
    axios
        .get('/notes/get-all-notes')
        .then(res => {
            dispatch({
                type: getNote.GET_ALL_NOTES_SUCCESS,
                payload: res.data.data
            })
        })
        .catch(err => {
            dispatch({
                type: getNote.GET_ALL_NOTES_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
        })
}