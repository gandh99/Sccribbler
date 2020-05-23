import { category } from '../actionTypes'
import { Category } from '../../reusableComponents/category/Interface'

export const allOption: Category = {
    categoryId: -1,
    name: 'All',
    ownerId: -1
}

const initialState = {
    newCategory: {},
    allCategories: [],
    activeCategory: allOption
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
        case category.SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.payload
            }
        case category.RESET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: allOption
            }
        default:
            return state
    }
}