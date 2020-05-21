import React from 'react'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import { useSelector, useDispatch } from 'react-redux'
import { IScribble } from '../../interfaces/notes'
import { showSnackbarAction } from '../../redux/actions/globalNotificationActions'
import { saveNoteToDatabaseAction } from '../../redux/actions/createNoteActions'
import { history } from '../../config/history'

export default function NoteHeader() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const title: string = useSelector((state: any) => state.createNote.title)
    const videoUrl: string = useSelector((state: any) => state.createNote.videoUrl)
    const allScribbles: IScribble[] = useSelector((state: any) => state.createNote.allScribbles)

    const onSubmit = (event: MouseEvent, title: string, videoUrl: string, allScribbles: IScribble[]): void => {
        event.preventDefault()

        // Check for blank inputs. It is ok for videoUrl to be blank
        if (title === '' || allScribbles.length === 0) {
            dispatch(showSnackbarAction('Please fill in a title and a scribble.', 'error'))
            return
        }

        dispatch(saveNoteToDatabaseAction(
            title,
            videoUrl,
            allScribbles,
            () => {
                history.push('/all-notes')
                dispatch(showSnackbarAction('Successfully saved note.', 'success'))
            },
            () => dispatch(showSnackbarAction('Error saving note to database. Please try again later.', 'error'))
        ))
    }

    return (
        <Tooltip title={'Save Note'}>
            <SaveIcon
                onClick={(e: any) => onSubmit(e, title, videoUrl, allScribbles)}
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