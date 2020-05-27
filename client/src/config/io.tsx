import openSocket from 'socket.io-client'
import { getNotesSharedWithMeAction } from '../redux/actions/notificationsActions'

let dispatch: any
let socket: any

if (process.env.NODE_ENV === 'development') {
    socket = openSocket('http://localhost:5000')
} else if (process.env.NODE_ENV === 'production') {
    socket = openSocket('https://myscribbler.herokuapp.com')
}

export function initIO(dispatchObject: any) {
    dispatch = dispatchObject

    // Initiate IO connection to the server to subscribe to updates from it
    const userData = localStorage.getItem('userData')
    socket.emit('subscribeToUpdates', userData)
    socket.on('subscribed', (msg: string) => console.log(msg))

    // Listen for the signal to refresh when the user receives a shared diary post
    socket.on('receiveShareNoteNotification', () => getNotesSharedWithMe())
}

const getNotesSharedWithMe = () => {
    dispatch(getNotesSharedWithMeAction())
}