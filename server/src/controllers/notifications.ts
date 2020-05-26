import { Request, Response, NextFunction } from 'express'
import { INote, IScribble } from '../interfaces/notes'
import { ICategory } from '../interfaces/category'
const Notifications = require('../models/Notifications')
const Users = require('../models/Users')
const Notes = require('../models/Notes')
const Scribbles = require('../models/Scribbles')

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

module.exports.getShareNoteNotifications = async (req: Request, res: Response, next: NextFunction) => {
    const { userData } = req.body.tokenData

    const shareNoteNotifications =
        await Notifications.getShareNoteNotifications(userData.user_id)

    res.status(200).send(shareNoteNotifications)
}

module.exports.markShareNoteNotificationsAsSeen = async (req: Request, res: Response, next: NextFunction) => {
    const { userData } = req.body.tokenData

    const seenNotifications =
        await Notifications.markShareNoteNotificationsAsSeen(userData.user_id)

    res.status(200).send(seenNotifications)
}

module.exports.respondToShareNote = async (req: Request, res: Response, next: NextFunction) => {
    const { sharedNote, accept } = req.body
    const { userData } = req.body.tokenData

    if (accept) {
        // Get the original note
        const originalNote: INote =
            await Notifications.getOriginalNote(sharedNote.shareNoteNotificationId)

        // Create a new note for this user, but leave out the category
        const newNoteCategory: ICategory = { categoryId: -1, name: '', ownerId: -1 }
        const newNote: INote =
            await Notes.insert(userData.user_id, originalNote.title, originalNote.videoUrl, newNoteCategory)

        // Duplicate all scribbles in the original note under the new note's id
        const originalScribbles: IScribble[] = await Scribbles.getByNoteId(originalNote.noteId)
        const newScribbles: IScribble[] = await Promise.all(
            originalScribbles.map(async (scribble: IScribble) => {
                return await Scribbles.insert(newNote.noteId, scribble)
            })
        )

        // Delete the notification
        const result = await Notifications.deleteShareNoteNotification(sharedNote.shareNoteNotificationId)

        return res.status(200).send(result)
    } else {
        const result =
            await Notifications.deleteShareNoteNotification(sharedNote.shareNoteNotificationId)
        return res.status(200).send(result)
    }
}