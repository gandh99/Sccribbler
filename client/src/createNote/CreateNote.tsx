import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export default function CreateNote() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.contentArea}>
                <div className={classes.titleArea}>
                    Hello
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
        backgroundColor: 'white',
        padding: '1rem 0',
        width: '100%'
    }
}))