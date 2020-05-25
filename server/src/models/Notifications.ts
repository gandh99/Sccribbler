import { INote } from "../interfaces/notes"
export { }
const client = require('../config/db')

module.exports.insertShareNoteNotification = async (
    senderId: number,
    recipientId: number,
    note: INote,
) => {
    const query: string =
        `INSERT INTO share_note_notification (sender_id, recipient_id, note_id) 
        VALUES ($1, $2, $3)
        RETURNING *`

    try {
        const notification = await client.query(query, [senderId, recipientId, note.noteId])
        return notification.rows[0]
    } catch (error) {
        console.error(error)
    }
}