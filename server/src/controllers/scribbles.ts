import { Request, Response, NextFunction } from 'express'
import { IScribble, INote } from '../interfaces/notes'
const Scribbles = require('../models/Scribbles')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { allScribbles } = req.body
    const { savedNote } = res.locals
    const noteId = savedNote.noteId

    /* First, delete all the scribbles not involved in the update/insert operation below. 
    This makes it possible for a user to delete a scribble in the frontend. 
    If this happened after the operation below, then it would not be possible to insert new scribbles. */
    await Scribbles.deleteByNoteIdExcept(noteId, allScribbles)

    /* In a single save operation, it is possible that some scribbles were inserted while others 
    were updated. Hence, we must differentiate them individually. A scribble is updated if its 
    scribbleId is a number; if it is a string, then it was generated via uuid and is hence inserted. */
    const savedAllScribbles: IScribble[] = await Promise.all(
        allScribbles.map(async (scribble: IScribble) => {
            return typeof(scribble.scribbleId) === 'number' ?
                await Scribbles.update(noteId, scribble) :
                await Scribbles.insert(noteId, scribble)
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