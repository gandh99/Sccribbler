import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CreateTitle from './CreateTitle'
import WritingArea from './WritingArea'

export default function CreateNote() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.contentArea}>
                <div className={classes.titleArea}>
                    <CreateTitle />
                </div>
                <div className={classes.bodyArea}>
                    <WritingArea />
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    contentArea: {
        margin: '2rem'
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