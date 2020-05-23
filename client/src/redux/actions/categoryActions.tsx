import { category } from '../actionTypes'
import axios from '../../config/axiosConfig'
import { returnErrors } from './errorActions'
import { ICategory } from '../../interfaces/category'

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

export const getCategoriesAction = (error: Function) => (dispatch: any) => {
    axios
        .get('/category/get')
        .then(res => {
            dispatch({
                type: category.GET_CATEGORIES_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: category.GET_CATEGORIES_FAIL,
                payload: err
            })
            dispatch(returnErrors(err))
            error()
        })
}

export const selectCategoryAction = (selectedCategory: ICategory) => (dispatch: any) => {
    dispatch({
        type: category.SET_ACTIVE_CATEGORY,
        payload: selectedCategory
    })
}

export const resetSelectedCategoryAction = () => (dispatch: any) => {
    dispatch({
        type: category.RESET_ACTIVE_CATEGORY,
    })
}