import { globalDisplay } from '../actionTypes'

export const showSnackbarAction = (message: string, severity: string) => (dispatch: any) => {
    dispatch({
        type: globalDisplay.SHOW_SNACKBAR,
        payload: {
            message,
            severity
        }
    })
}

export const hideSnackbarAction = () => (dispatch: any) => {
    dispatch({
        type: globalDisplay.HIDE_SNACKBAR,
    })
}

export const showLoadingBackgroundAction = (message: string) => (dispatch: any) => {
    dispatch({
        type: globalDisplay.SHOW_LOADING_BACKGROUND,
        payload: message
    })
}

export const hideLoadingBackgroundAction = () => (dispatch: any) => {
    dispatch({
        type: globalDisplay.HIDE_LOADING_BACKGROUND
    })
}