import { Request, Response, NextFunction } from 'express'
const Notes = require('../models/Notes')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { title, videoUrl, allScribbles } = req.body
    const { userData } = req.body.tokenData

    const addedNote = await Notes.upsert(title, videoUrl, allScribbles)

    res.status(200).json({
        message: 'ok'
    })
}

module.exports.getAllNotes = () => { }