export { }
import { IScribble } from "../interfaces/notes"
const client = require('../config/db')

module.exports.upsert = async (note_id: number, scribble: IScribble) => {
    const { timestamp, text } = scribble
    const query: string = `INSERT INTO scribbles (note_id, timestamp, text) VALUES ($1, $2, $3) RETURNING *`

    try {
        const note = await client.query(query, [note_id, timestamp, text])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}