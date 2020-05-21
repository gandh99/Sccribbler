import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { getAllNotesAction } from '../redux/actions/getNoteActions'
import { INote } from '../interfaces/notes'
import NoteCard from './NoteCard'
import { Grid } from '@material-ui/core'

export default function NotesDisplayArea() {
    const classes = useStyles()
    const allNotes: INote[] = useSelector((state: any) => state.getNote.allNotes)

    return (
        <Grid
            className={classes.root}
            container
            spacing={0}
            direction="row"
            justify="flex-start"
            alignItems="center" >
            {allNotes && allNotes.map((note: INote) => {
                return <NoteCard key={note.note_id} note={note} />
            })}
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))