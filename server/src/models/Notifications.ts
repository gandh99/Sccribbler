import { INote } from "../interfaces/notes"
export { }
const client = require('../config/db')

module.exports.insertShareNoteNotification = async (
    senderId: number,
    recipientId: number,
    note: INote,
) => {
    const query: string =
        `INSERT INTO share_note_notifications (sender_id, recipient_id, note_id) 
        VALUES ($1, $2, $3)
        RETURNING *`

    try {
        const notification = await client.query(query, [senderId, recipientId, note.noteId])
        return notification.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.getShareNoteNotifications = async (userId: number) => {
    const query: string =
        `SELECT share_note_notification_id, sender_id, username, notes.note_id, title, seen
        FROM share_note_notifications
        JOIN users ON share_note_notifications.sender_id = users.user_id
        JOIN notes ON share_note_notifications.note_id = notes.note_id
        WHERE recipient_id = ($1)`

    try {
        const notification = await client.query(query, [userId])
        return notification.rows
    } catch (error) {
        console.error(error)
    }
}