import React from 'react'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'
import { useSelector, useDispatch } from 'react-redux'

export default function NoteHeader() {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <div className={classes.root}>ALL NOTES</div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))