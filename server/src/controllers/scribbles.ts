import { Request, Response, NextFunction } from 'express'
import { IScribble, INote } from '../interfaces/notes'
const Scribbles = require('../models/Scribbles')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { allScribbles } = req.body
    const savedNote = res.locals.savedNote
    const note_id = savedNote.note_id

    const savedAllScribbles: IScribble[] = await Promise.all(
        allScribbles.map(async (scribble: IScribble) => await Scribbles.upsert(note_id, scribble))
    )

    const result: INote = {
        noteId: savedNote.note_id,
        title: savedNote.title,
        videoUrl: savedNote.video_url,
        allScribbles: savedAllScribbles
    }

    res.status(200).json({
        data: result,
        message: 'Successfully saved note.',
    })
}

module.exports.getAllNotes = () => { }