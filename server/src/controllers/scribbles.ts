import { Request, Response, NextFunction } from 'express'
const Scribbles = require('../models/Scribbles')

module.exports.save = async (req: Request, res: Response, next: NextFunction) => {
    const { allScribbles } = req.body
    const { userData } = req.body.tokenData

    // const savedScribble = await Scribbles.upsert(userData.user_id, allScribbles)
    res.status(200).json({
        message: 'ok'
    })
}

module.exports.getAllNotes = () => { }