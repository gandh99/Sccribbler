export { }
import { IScribble } from "../interfaces/notes"
const client = require('../config/db')

module.exports.insert = async (noteId: number, scribble: IScribble) => {
    const { timeElapsed, text } = scribble
    const query: string = `INSERT INTO scribbles (note_id, time_elapsed, text) VALUES ($1, $2, $3) RETURNING *`

    try {
        const note = await client.query(query, [noteId, timeElapsed, text])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.update = async (noteId: number, scribble: IScribble) => {
    const { timeElapsed, text } = scribble
    const query: string =
        `UPDATE scribbles 
        SET time_elapsed = ($1), text = ($2) 
        WHERE note_id = ($3) AND scribble_id = ($4) 
        RETURNING *`

    try {
        const note = await client.query(query, [timeElapsed, text, noteId, scribble.scribbleId])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.deleteByNoteIdExcept = async (noteId: number, scribblesToKeep: IScribble[]) => {
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
        const note = await client.query(query, [noteId, scribbleIdsToKeep])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.getByNoteId = async (noteId: number) => {
    const query: string =
        `SELECT scribble_id AS "scribbleId", text, time_elapsed AS "timeElapsed"
        FROM scribbles 
        WHERE note_id = ($1)` 

    try {
        const note = await client.query(query, [noteId])
        return note.rows
    } catch (error) {
        console.error(error)
    }
}
