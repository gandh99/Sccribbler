import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoteTitle from './NoteTitle'
import NoteBody from './NoteBody'
import TypingBar from './TypingBar'

export default function CreateNote() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.contentArea}>
                <div className={classes.headerArea}>
                    <NoteTitle />
                </div>
                <div className={classes.bodyArea}>
                    <NoteBody />
                </div>
            </div>
            <div className={classes.footerArea}>
                <TypingBar />
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '100vh',
        width: '100%',
    },

    // Content area (= header + body)
    contentArea: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: '3.5rem',
        margin: '1rem',
    },
    headerArea: {
        marginBottom: '1rem'
    },
    bodyArea: {
        width: '100%',
        height: '80%',
    },

    // Footer area
    footerArea: {
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: '3.5rem',
        overflow: 'hidden',
        backgroundColor: theme.palette.grey[300],
        opacity: 0.8,
        [theme.breakpoints.down('xs')]: {
            position: 'fixed'
        },
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
        },
    }
}))