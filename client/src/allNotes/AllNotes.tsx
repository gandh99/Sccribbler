import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { getAllNotesAction } from '../redux/actions/getNoteActions'
import NotesDisplayArea from './NotesDisplayArea'

export default function NoteHeader() {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllNotesAction())
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.contentArea}>
                <NotesDisplayArea />
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
    },
    contentArea: {
        margin: '1rem'
    }
}))