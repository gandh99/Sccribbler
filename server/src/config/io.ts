let io: any
let userToIOMap = new Map<number, string>()

// Setup IO connection
module.exports.init = (ioObject: any) => {
    // Save the IO object
    io = ioObject

    io.on('connection', (client: any) => {
        client.on('subscribeToUpdates', (userDataString: string) => {
            // Update the map of users who have connected
            let userData = JSON.parse(userDataString)
            userToIOMap.set(userData.user_id, client.id)

            // Subscription successful
            console.log(`${userData.username} [userId: ${userData.user_id}; clientId: ${client.id}] is subscribing to updates.`)
            client.emit('subscribed', 'Successfully subscribed to updates from the server.')
        })
    })
}

// Signal to client to refresh for a received shared diary post
module.exports.sendShareNoteNotification = (recipientId: number) => {
    const receiver: string | undefined = userToIOMap.get(recipientId)
    io.to(receiver).emit('receiveShareNoteNotification')
}