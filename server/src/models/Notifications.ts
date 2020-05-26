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
        `SELECT share_note_notification_id AS "shareNoteNotificationId", sender_id AS "senderId", 
        username, notes.note_id AS noteId, title, seen
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

module.exports.markShareNoteNotificationsAsSeen = async (userId: number) => {
    const query: string =
        `UPDATE share_note_notifications
        SET seen = true
        WHERE recipient_id = ($1)
        RETURNING share_note_notification_id AS "shareNoteNotificationId", sender_id AS "senderId", 
        note_id AS noteId`

    try {
        const notification = await client.query(query, [userId])
        return notification.rows
    } catch (error) {
        console.error(error)
    }
}

module.exports.acceptShareNote = async (userId: number, shareNoteNotificationId: number) => {
    const query: string =
        `UPDATE share_note_notifications
        SET seen = true
        WHERE recipient_id = ($1)`

    try {
        const notification = await client.query(query, [userId])
        return notification.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.rejectShareNote = async (shareNoteNotificationId: number) => {
    const query: string =
        `DELETE FROM share_note_notifications
        WHERE share_note_notification_id = ($1)
        RETURNING share_note_notification_id AS "shareNoteNotificationId", sender_id AS "senderId", 
        note_id AS noteId`

    try {
        const notification = await client.query(query, [shareNoteNotificationId])
        return notification.rows[0]
    } catch (error) {
        console.error(error)
    }
}