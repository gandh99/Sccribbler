import { videoPlayer } from '../actionTypes'

const initialState = {
    isRequestingTimeElapsed: false,
    timeElapsed: 0,
    duration: 0,    
} 

export default function (state = initialState, action: any) {
    switch (action.type) {
        case videoPlayer.REQUEST_FOR_TIME_ELAPSED:
            return {
                ...state,
                isRequestingTimeElapsed: true
            }
        case videoPlayer.RESPOND_WITH_TIME_ELAPSED:
            return {
                ...state,
                isRequestingTimeElapsed: false,
                timeElapsed: action.payload
            }
        case videoPlayer.RESET_TIME_ELAPSED:
            return {
                ...state,
                isRequestingTimeElapsed: false,
                timeElapsed: 0
            }
        case videoPlayer.SET_DURATION:
            return {
                ...state,
                duration: action.payload
            }
        case videoPlayer.RESET_DURATION:
            return {
                ...state,
                duration: 0
            }
        default:
            return state
    }
}