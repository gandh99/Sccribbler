import { Request, Response, NextFunction } from 'express'
const Notes = require('../models/Notes')
const Users = require('../models/Users')
const Notifications = require('../models/Notifications')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { noteId, title, videoUrl, category } = req.body
    const { userData } = req.body.tokenData

    res.locals.savedNote = noteId > 0 ?     // if the note already exists
        await Notes.update(noteId, userData.user_id, title, videoUrl, category) :
        await Notes.insert(userData.user_id, title, videoUrl, category)
    next()
}

module.exports.getAllNotes = async (req: Request, res: Response, next: NextFunction) => {
    const { userData } = req.body.tokenData

    const allNotes = await Notes.getByUserId(userData.user_id)
    res.status(200).json({
        data: allNotes
    })
}

module.exports.share = async (req: Request, res: Response, next: NextFunction) => {
    const { recipient } = req.body

    const recipientUser = await Users.findByUsername(recipient)
    if (!recipientUser) {
        return res.status(400).send('User not found.')
    }

    res.locals.recipientUser = recipientUser
    next()
}

module.exports.delete = async (req: Request, res: Response, next: NextFunction) => {
    const { noteId } = req.params

    const deletedNote = await Notes.delete(noteId)
    res.status(200).send(deletedNote)
}