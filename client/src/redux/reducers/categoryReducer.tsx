import { category } from '../actionTypes'

const initialState = {
    newCategory: '',
    allCategories: []
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case category.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                newCateogry: action.payload
            }
        case category.CREATE_CATEGORY_FAIL:
            return {
                ...state,
                newCategory: ''
            }
        default:
            return state
    }
}