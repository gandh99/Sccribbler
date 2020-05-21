import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { getAllNotesAction } from '../redux/actions/getNoteActions'

export default function NoteHeader() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const allNotes = useSelector((state: any) => state.getNote.allNotes)

    useEffect(() => {
        dispatch(getAllNotesAction())
    }, [])

    return (
        <div className={classes.root}>ALL NOTES</div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))