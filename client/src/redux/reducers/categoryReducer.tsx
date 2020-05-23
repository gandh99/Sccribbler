import { category } from '../actionTypes'

const initialState = {
    newCategory: {},
    allCategories: []
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case category.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                newCateogry: action.payload,
                allCategories: [...state.allCategories, action.payload]
            }
        case category.CREATE_CATEGORY_FAIL:
            return {
                ...state,
                newCategory: {}
            }
        case category.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                allCategories: action.payload
            }
        case category.GET_CATEGORIES_FAIL:
            return {
                ...state,
                allCategories: []
            }
        default:
            return state
    }
}