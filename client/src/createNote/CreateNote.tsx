import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import NoteTitle from './NoteTitle'
import NoteBody from './NoteBody'

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
                x
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
    footerArea: {
        bottom: 0,
        left: 0,
        right: 0,
        height: '3.5rem',
        overflow: 'hidden',
        backgroundColor: theme.palette.grey[300],
        [theme.breakpoints.down('xs')]: {
            position: 'fixed'
        },
        [theme.breakpoints.up('sm')]: {
            position: 'absolute',
        },
    }
}))