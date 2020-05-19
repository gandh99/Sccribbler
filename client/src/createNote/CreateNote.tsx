import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoteTitle from './NoteTitle'
import NoteBody from './NoteBody'

export default function CreateNote() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.contentArea}>
                <div className={classes.titleArea}>
                    <NoteTitle />
                </div>
                <div className={classes.bodyArea}>
                    <NoteBody />
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    contentArea: {
        margin: '1rem 2rem'
    },
    titleArea: {
        width: '100%',
        marginBottom: '1rem'
    },
    bodyArea: {
        width: '100%',
        height: '25rem',
    }
}))