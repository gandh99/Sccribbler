import openSocket from 'socket.io-client'
import { getNotesSharedWithMeAction } from '../redux/actions/notificationsActions'
const socket = openSocket('http://localhost:5000')
let dispatch: any

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