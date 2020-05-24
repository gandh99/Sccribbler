import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { INote } from '../../interfaces/notes'
import NoteCard from '../../reusableComponents/noteCard/NoteCard'
import { Grid } from '@material-ui/core'
import { ICategory } from '../../interfaces/category'

export default function NotesDisplayArea() {
    const classes = useStyles()
    const activeCategory: ICategory = useSelector((state: any) => state.category.activeCategory)
    const allNotes: INote[] = useSelector((state: any) => state.getNote.allNotes)

    return (
        <Grid
            className={classes.root}
            container
            spacing={0}
            direction="row"
            justify="flex-start"
            alignItems="center" >
            {allNotes &&
                allNotes
                    .filter((note: INote) => activeCategory.categoryId < 0 ||
                        note.category?.categoryId === activeCategory.categoryId)
                    .map((note: INote) => {
                        return <NoteCard key={note.noteId} note={note} />
                    })
            }
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))