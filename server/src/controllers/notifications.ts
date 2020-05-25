import { Request, Response, NextFunction } from 'express'
const Notifications = require('../models/Notifications')
const Users = require('../models/Users')

module.exports.insertShareNoteNotification = async (req: Request, res: Response, next: NextFunction) => {
    const { note, recipient } = req.body
    const { userData } = req.body.tokenData

    const recipientUser = await Users.findByUsername(recipient)
    if (!recipientUser) {
        return res.status(400).send('User not found.')
    }

    const shareNoteNotification =
        await Notifications.insertShareNoteNotification(userData.user_id, recipientUser.user_id, note)

    res.status(200).json({
        data: shareNoteNotification
    })
}