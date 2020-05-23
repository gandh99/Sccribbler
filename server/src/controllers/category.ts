import { Request, Response, NextFunction } from 'express'
const Category = require('../models/Category')

module.exports.create = async (req: Request, res: Response, next: NextFunction) => {
    const { name } = req.body
    const { userData } = req.body.tokenData

    const newCategory = await Category.create(userData.user_id, name)
    res.status(200).send(newCategory)
}

module.exports.get = async (req: Request, res: Response, next: NextFunction) => {
    const { userData } = req.body.tokenData

    const allCategories = await Category.get(userData.user_id)
    res.status(200).send(allCategories)
}