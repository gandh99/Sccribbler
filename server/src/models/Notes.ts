export {}
import { IScribble } from "../interfaces/notes"
const client = require('../config/db')

module.exports.upsert = async (title: string, videoUrl: string, allScribbles: IScribble[]) => {
    const query: string = `INSERT INTO notes (title, video_url) VALUES ($1, $2) RETURNING *`

    try {
        const note = await client.query(query, [title, videoUrl])
        return note.rows[0]
    } catch (error) {
        console.error(error)
    }
}