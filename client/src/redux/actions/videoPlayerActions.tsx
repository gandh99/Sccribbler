import { videoPlayer } from '../actionTypes'

export const requestForTimeElapsedAction = () => (dispatch: any) => {
    dispatch({
        type: videoPlayer.REQUEST_FOR_TIME_ELAPSED
    })
}

export const respondWithTimesElapsedAction = (timeElapsed: number) => (dispatch: any) => {
    dispatch({
        type: videoPlayer.RESPOND_WITH_TIME_ELAPSED,
        payload: timeElapsed
    })
}

export const resetTimeElapsedAction = () => (dispatch: any) => {
    dispatch({
        type: videoPlayer.RESET_TIME_ELAPSED
    })
}

export const setDurationAction = (duration: number) => (dispatch: any) => {
    dispatch({
        type: videoPlayer.SET_DURATION,
        payload: duration
    })
}

export const resetDurationAction = () => (dispatch: any) => {
    dispatch({
        type: videoPlayer.RESET_DURATION
    })
}