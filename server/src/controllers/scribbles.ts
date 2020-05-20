import { Request, Response, NextFunction } from 'express'
import { IScribble } from '../interfaces/notes'
const Scribbles = require('../models/Scribbles')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { allScribbles } = req.body
    const note_id = res.locals.note_id

    const savedScribble = await Promise.all(
        allScribbles.map(async (scribble: IScribble) => await Scribbles.upsert(note_id, scribble))
    )

    res.status(200).json({
        message: 'Successfully saved note.'
    })
}

module.exports.getAllNotes = () => { }