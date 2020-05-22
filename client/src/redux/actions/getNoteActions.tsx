import { getNote } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'
import { INote } from '../../interfaces/notes'

export const getAllNotesAction = (success: Function, error: Function) => (dispatch: any) => {
    axios
        .get('/notes/get-all-notes')
        .then(res => {
            let allNotes: INote[] = res.data.data

            // Sort by latest first
            allNotes.sort((note1: INote, note2: INote) => {
                return (note1.updatedAt! > note2.updatedAt!) ? -1 : 1
            })

            dispatch({
                type: getNote.GET_ALL_NOTES_SUCCESS,
                payload: allNotes
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: getNote.GET_ALL_NOTES_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error()
        })
}