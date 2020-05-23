export { }
const client = require('../config/db')

module.exports.create = async (userId: number, name: string) => {
    const query: string = 
        `INSERT INTO category (owner_id, name) 
        VALUES ($1, $2) 
        RETURNING category_id AS "categoryId", name, owner_id AS "ownerId"`

    try {
        const category = await client.query(query, [userId, name])
        return category.rows[0]
    } catch (error) {
        console.error(error)
    }
}

module.exports.get = async (userId: number) => {
    const query: string = 
        `SELECT owner_id AS "ownerId", name, category_id AS "categoryId" 
        FROM category 
        WHERE owner_id = ($1)`

    try {
        const allCategories = await client.query(query, [userId])
        return allCategories.rows
    } catch (error) {
        console.error(error)
    }
}

module.exports.delete = async (userId: number, categoryId: number) => {
    const query: string = 
        `DELETE FROM category 
        WHERE owner_id = ($1) AND category_id = ($2)
        RETURNING category_id AS "categoryId", name, owner_id AS "ownerId"`

    try {
        const deletedCategory = await client.query(query, [userId, categoryId])
        return deletedCategory.rows[0]
    } catch (error) {
        console.error(error)
    }
}