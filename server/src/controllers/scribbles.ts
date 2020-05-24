import { Request, Response, NextFunction } from 'express'
import { IScribble, INote } from '../interfaces/notes'
const Scribbles = require('../models/Scribbles')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { allScribbles } = req.body
    const { isUpdateOperation, savedNote } = res.locals
    const note_id = savedNote.note_id

    const savedAllScribbles: IScribble[] = await Promise.all(
        allScribbles.map(async (scribble: IScribble) => {
            return isUpdateOperation ?
                await Scribbles.update(note_id, scribble) :
                await Scribbles.insert(note_id, scribble)
        })
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