export { }
const client = require('../config/db')

module.exports.create = async (userId: number, name: string) => {
    const query: string = `INSERT INTO category (owner_id, name) VALUES ($1, $2) RETURNING *`

    try {
        const category = await client.query(query, [userId, name])
        return category.rows[0]
    } catch (error) {
        console.error(error)
    }
}