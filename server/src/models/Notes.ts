export {}
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