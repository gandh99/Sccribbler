import { category } from '../actionTypes'
import { ICategory } from '../../interfaces/category'

export const allOption: ICategory = {
    categoryId: -1,
    name: 'All',
    ownerId: -1
}

const initialState = {
    newCategory: {},
    allCategories: [],
    activeCategory: allOption,
    deletedCategory: {}
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
        case category.DELETE_CATEGORY_SUCCESS:
            const allCategories = state.allCategories.filter((category: ICategory) => category.categoryId !== action.payload.categoryId)

            return {
                ...state,
                activeCategory: allCategories.length <= 1 ? allOption : state.activeCategory,
                deletedCategory: action.payload,
                allCategories
            }
        case category.DELETE_CATEGORY_FAIL:
            return {
                ...state,
                deletedCategory: {}
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