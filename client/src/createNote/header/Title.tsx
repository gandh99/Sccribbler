import React from 'react'
import { InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { saveTitleAction } from '../../redux/actions/saveNoteActions'

export default function Title() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const title = useSelector((state: any) => state.saveNote.title)

    const autoSave = (title: string): void => {
        dispatch(saveTitleAction(title))
    }

    return (
        <InputBase
            className={classes.textInput}
            onChange={event => autoSave(event.target.value)}
            required
            placeholder={'Add a Title...'}
            value={title}
        />
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