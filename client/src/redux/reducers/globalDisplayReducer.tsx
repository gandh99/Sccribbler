import { globalDisplay } from '../actionTypes'

const initialState = {
    snackbar: {
        show: false,
        severity: '',
        message: ''
    },
    loadingBackground: {
        show: false,
        message: ''
    }
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case globalDisplay.SHOW_SNACKBAR:
            return {
                ...state,
                snackbar: {
                    show: true,
                    ...action.payload
                }
            }
        case globalDisplay.HIDE_SNACKBAR:
            return {
                ...state,
                snackbar: {
                    show: false,
                    severity: '',
                    message: ''
                }
            }
        case globalDisplay.SHOW_LOADING_BACKGROUND:
            return {
                ...state,
                loadingBackground: {
                    show: true,
                    message: action.payload
                }
            }
        case globalDisplay.HIDE_LOADING_BACKGROUND:
            return {
                ...state,
                loadingBackground: {
                    show: false,
                    message: ''
                }
            }
        default:
            return state
    }
}