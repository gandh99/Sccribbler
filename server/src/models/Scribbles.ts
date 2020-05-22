export { }
import { IScribble } from "../interfaces/notes"
const client = require('../config/db')

module.exports.upsert = async (note_id: number, scribble: IScribble) => {
    const { timeElapsed, text } = scribble
    const query: string = `INSERT INTO scribbles (note_id, time_elapsed, text) VALUES ($1, $2, $3) RETURNING *`

    try {
        const note = await client.query(query, [note_id, timeElapsed, text])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}