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

module.exports.get = async (userId: number) => {
    const query: string = `SELECT owner_id AS "ownerId", name, category_id AS "categoryId" FROM category WHERE owner_id = ($1)`

    try {
        const allCategories = await client.query(query, [userId])
        return allCategories.rows
    } catch (error) {
        console.error(error)
    }
}