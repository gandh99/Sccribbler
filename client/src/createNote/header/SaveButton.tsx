import React from 'react'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import { useSelector, useDispatch } from 'react-redux'
import { IMessage } from '../../utils/note'
import { showSnackbarAction } from '../../redux/actions/globalNotificationActions'
import { saveNoteToDatabaseAction } from '../../redux/actions/createNoteActions'

export default function NoteHeader() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const title: string = useSelector((state: any) => state.createNote.title)
    const videoUrl: string = useSelector((state: any) => state.createNote.videoUrl)
    const allMessages: IMessage[] = useSelector((state: any) => state.createNote.allMessages)

    const onSubmit = (event: MouseEvent, title: string, videoUrl: string, allMessages: IMessage[]): void => {
        event.preventDefault()

        // Check for blank inputs. It is ok for videoUrl to be blank
        if (title === '' || allMessages.length === 0) {
            dispatch(showSnackbarAction('Please fill in a title and a message.', 'error'))
            return
        }

        dispatch(saveNoteToDatabaseAction(title, videoUrl, allMessages))
    }

    return (
        <Tooltip title={'Save Note'}>
            <SaveIcon
                onClick={(e: any) => onSubmit(e, title, videoUrl, allMessages)}
                className={classes.icon}
            />
        </Tooltip>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    icon: {
        color: theme.palette.secondary.dark,
        cursor: 'pointer',
        padding: '0 0.5rem'
    },
}))