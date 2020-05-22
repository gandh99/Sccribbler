import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import CategoryButton from './CategoryButton'

export default function NoteHeader() {
    const classes = useStyles()
    const dispatch = useDispatch()

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