import { category } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'

export const createCategoryAction = (name: string, success: Function, error: Function) => (dispatch: any) => {
    axios
        .post('/category/create', { name })
        .then(res => {
            dispatch({
                type: category.CREATE_CATEGORY_SUCCESS,
                payload: res.data
            })
            success()
        })
        .catch(err => {
            dispatch({
                type: category.CREATE_CATEGORY_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error()
        })
}