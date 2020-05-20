import { Request, Response, NextFunction } from 'express'
const Notes = require('../models/Notes')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { title, videoUrl } = req.body
    const { userData } = req.body.tokenData

    const savedNote = await Notes.upsert(userData.user_id, title, videoUrl)
    res.locals.savedNote = savedNote  // correct way to pass a variable to the next middleware function
    next()
}

module.exports.getAllNotes = () => { }