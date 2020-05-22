import React, { useState } from 'react'
import { InputBase, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CreateIcon from '@material-ui/icons/Create'
import { useDispatch } from 'react-redux'
import { saveTitleAction } from '../../redux/actions/saveNoteActions'
import { showSnackbarAction } from '../../redux/actions/globalDisplayActions'

export default function NoteHeader() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    const onSubmit = (event: MouseEvent, title: string): void => {
        event.preventDefault()

        if (title !== '') {
            dispatch(saveTitleAction(title))
            dispatch(showSnackbarAction('Saved title.', 'success'))
        }
    }

    return (
        <>
            <InputBase
                className={classes.textInput}
                onChange={event => setTitle(event.target.value)}
                required
                placeholder={'Add a Title...'}
                value={title}
            />
            <Tooltip title={'Submit Title'}>
                <CreateIcon
                    onClick={(e: any) => onSubmit(e, title)}
                    className={classes.createIcon}
                />
            </Tooltip>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    textInput: {
        width: '100%',
    },
    createIcon: {
        marginLeft: '1rem',
        padding: '0 0.8rem',
        color: theme.palette.primary.dark,
        cursor: 'pointer'
    },
}))