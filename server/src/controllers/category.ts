import { Request, Response, NextFunction } from 'express'
const Category = require('../models/Category')

module.exports.create = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body
    const { userData } = req.body.tokenData

    const newCategory = await Category.create(userData.user_id, name)
    res.status(200).send(newCategory)
}