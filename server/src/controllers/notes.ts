import { Request, Response, NextFunction } from 'express'
const Notes = require('../models/Notes')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { noteId, title, videoUrl, category } = req.body
    const { userData } = req.body.tokenData

    res.locals.savedNote = noteId > 0 ?     // if the note already exists
        await Notes.update(noteId, userData.user_id, title, videoUrl, category) :
        await Notes.insert(userData.user_id, title, videoUrl, category)
    res.locals.isUpdateOperation = noteId > 0
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