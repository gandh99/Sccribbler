import { INote } from "../interfaces/notes"

export { }
const client = require('../config/db')

module.exports.upsert = async (userId: number, title: string, videoUrl: string) => {
    const query: string = `INSERT INTO notes (owner_id, title, video_url) VALUES ($1, $2, $3) RETURNING *`

    try {
        const note = await client.query(query, [userId, title, videoUrl])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.getByUserId = async (userId: number) => {
    const query: string = `SELECT * FROM notes NATURAL LEFT JOIN scribbles WHERE owner_id = ($1) ORDER BY note_id`
    let notes: INote[] = []

    try {
        const queryResult = await client.query(query, [userId])

        // Turn the result into INote[]
        let noteId: number
        queryResult.rows.forEach((result: any) => {
            if (result.note_id !== noteId) {
                // Start of a new note
                const { note_id, title, video_url, updated_at } = result
                noteId = note_id
                notes.push({
                    note_id: note_id,
                    title,
                    videoUrl: video_url,
                    updated_at,
                    allScribbles: []
                })
            }

            // Add scribble to the last note
            const { scribble_id, timeElapsed, text } = result
            let lastNote = notes[notes.length - 1]
            lastNote.allScribbles!.push({
                scribble_id,
                timeElapsed,
                text
            })
        })

        return notes
    } catch (error) {
        console.error(error)
    }
}