import { Request, Response, NextFunction } from 'express'
const Notes = require('../models/Notes')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { title, videoUrl, category } = req.body
    const { userData } = req.body.tokenData

    const savedNote = await Notes.upsert(userData.user_id, title, videoUrl, category)
    res.locals.savedNote = savedNote  // correct way to pass a variable to the next middleware function
    next()
}

module.exports.getAllNotes = async (req: Request, res: Response, next: NextFunction) => {
    const { userData } = req.body.tokenData

    const allNotes = await Notes.getByUserId(userData.user_id)
    res.status(200).json({
        data: allNotes
    })
}

module.exports.delete = async (req: Request, res: Response, next: NextFunction) => {
    const { noteId } = req.params

    const deletedNote = await Notes.delete(noteId)
    res.status(200).send(deletedNote)
}