import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CategoryButton from './CategoryButton'

export default function NoteHeader() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CategoryButton />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))