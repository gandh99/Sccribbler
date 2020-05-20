export {}
import { IScribble } from "../interfaces/notes"
const client = require('../config/db')

// module.exports.upsert = async (x: IScribble[]) => {
//     const query: string = `INSERT INTO scribbles (title, video_url) VALUES ($1, $2) RETURNING *`

//     try {
//         const note = await client.query(query, [title, videoUrl])
//         return note.rows[0]
//     } catch (error) {
//         console.error(error)
//     }
// }