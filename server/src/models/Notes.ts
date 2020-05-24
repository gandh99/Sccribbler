import { INote } from "../interfaces/notes"
import { ICategory } from "../interfaces/category"
export { }
const client = require('../config/db')
const Category = require('./Category')

module.exports.upsert = async (userId: number, title: string, videoUrl: string, category: ICategory) => {
    const query: string =
        `INSERT INTO notes (owner_id, title, video_url, category_id) VALUES ($1, $2, $3, $4) RETURNING *`
    const categoryValue: number | null = category.categoryId > 0 ? category.categoryId : null

    try {
        const note = await client.query(query, [userId, title, videoUrl, categoryValue])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.getByUserId = async (userId: number) => {
    const query: string =
        `SELECT * FROM notes 
        NATURAL LEFT JOIN scribbles 
        NATURAL LEFT JOIN category 
        WHERE owner_id = ($1) 
        ORDER BY note_id`
    let notes: INote[] = []

    try {
        const queryResult = await client.query(query, [userId])

        // Turn the result into INote[]
        let noteId: number
        queryResult.rows.forEach((result: any) => {
            if (result.note_id !== noteId) {
                // Start of a new note
                const { note_id, title, video_url, category_id, name, updated_at } = result
                noteId = note_id
                notes.push({
                    noteId: note_id,
                    title,
                    videoUrl: video_url,
                    category: {
                        categoryId: category_id,
                        name,
                        ownerId: userId
                    },
                    updatedAt: updated_at,
                    allScribbles: []
                })
            }

            // Add scribble to the note
            const { scribble_id, time_elapsed, text } = result
            let lastNote = notes[notes.length - 1]
            lastNote.allScribbles!.push({
                scribbleId: scribble_id,
                timeElapsed: time_elapsed,
                text
            })
        })

        return notes
    } catch (error) {
        console.error(error)
    }
}

module.exports.delete = async (noteId: number) => {
    const query: string =
        `DELETE FROM notes 
        WHERE note_id = ($1) 
        RETURNING note_id AS "noteId", title, video_url AS "videoUrl", owner_id AS "ownerId",
            updated_at AS "updatedAt", category_id AS "categoryId"`

    try {
        const deletedNote = await client.query(query, [noteId])
        return deletedNote.rows[0]
    } catch (error) {
        console.error(error)
    }
}