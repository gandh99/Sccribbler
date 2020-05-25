import { saveNote } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'
import { IScribble } from '../../interfaces/notes'
import { ICategory } from '../../interfaces/category'

export const saveNoteIdAction = (id: string | number) => (dispatch: any) => {
    dispatch({
        type: saveNote.SAVE_NOTE_ID,
        payload: id
    })
}

export const saveTitleAction = (title: string) => (dispatch: any) => {
    dispatch({
        type: saveNote.SAVE_TITLE,
        payload: title
    })
}

export const saveVideoUrlAction = (videoUrl: string) => (dispatch: any) => {
    dispatch({
        type: saveNote.SAVE_VIDEO_URL,
        payload: videoUrl
    })
}

export const saveScribbleAction = (scribble: IScribble) => (dispatch: any) => {
    dispatch({
        type: saveNote.SAVE_SCRIBBLE,
        payload: scribble
    })
}

export const deleteScribbleAction = (scribble: IScribble) => (dispatch: any) => {
    dispatch({
        type: saveNote.DELETE_SCRIBBLE,
        payload: scribble
    })
}

export const saveAllScribblesAction = (allScribbles: IScribble[]) => (dispatch: any) => {
    dispatch({
        type: saveNote.SAVE_ALL_SCRIBBLES,
        payload: allScribbles
    })
}

export const saveNoteToDatabaseAction = (
    noteId: string | number,
    title: string,
    videoUrl: string,
    category: ICategory,
    allScribbles: IScribble[],
    success: Function,
    error: Function,
) => (dispatch: any) => {
    axios
        .post('/notes/save', { noteId, title, videoUrl, category, allScribbles })
        .then(res => {
            const savedNote = res.data.data
            dispatch({
                type: saveNote.SAVE_NOTE_TO_DATABASE_SUCCESS,
                payload: savedNote
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: saveNote.SAVE_NOTE_TO_DATABASE_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error()
        })
}

export const clearNoteDataAction = () => (dispatch: any) => {
    dispatch({
        type: saveNote.CLEAR_NOTE_DATA,
    })
}