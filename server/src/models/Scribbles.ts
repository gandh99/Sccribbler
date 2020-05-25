export { }
import { IScribble } from "../interfaces/notes"
const client = require('../config/db')

module.exports.insert = async (note_id: number, scribble: IScribble) => {
    const { timeElapsed, text } = scribble
    const query: string = `INSERT INTO scribbles (note_id, time_elapsed, text) VALUES ($1, $2, $3) RETURNING *`

    try {
        const note = await client.query(query, [note_id, timeElapsed, text])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.update = async (note_id: number, scribble: IScribble) => {
    const { timeElapsed, text } = scribble
    const query: string =
        `UPDATE scribbles 
        SET time_elapsed = ($1), text = ($2) 
        WHERE note_id = ($3) AND scribble_id = ($4) 
        RETURNING *`

    try {
        const note = await client.query(query, [timeElapsed, text, note_id, scribble.scribbleId])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.deleteByNoteIdExcept = async (note_id: number, scribblesToKeep: IScribble[]) => {
    const query: string =
        `DELETE FROM scribbles 
        WHERE note_id = ($1) AND NOT scribble_id = ANY ($2) 
        RETURNING *`
    const scribbleIdsToKeep = [
        ...scribblesToKeep
            .filter(scribble => typeof (scribble.scribbleId) === 'number')
            .map(scribble => scribble.scribbleId)
    ]

    try {
        const note = await client.query(query, [note_id, scribbleIdsToKeep])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}