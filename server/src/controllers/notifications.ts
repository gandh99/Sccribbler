import { Request, Response, NextFunction } from 'express'
const Notifications = require('../models/Notifications')

module.exports.insertShareNoteNotification = async (req: Request, res: Response, next: NextFunction) => {
    const { note } = req.body
    const { userData } = req.body.tokenData
    const { recipientUser } = res.locals

    const shareNoteNotification =
        await Notifications.insertShareNoteNotification(userData.user_id, recipientUser.user_id, note)

    res.status(200).json({
        data: shareNoteNotification
    })
}