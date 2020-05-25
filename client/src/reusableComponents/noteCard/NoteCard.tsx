import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { INote, IScribble } from '../../interfaces/notes'
import { Card, CardContent, Divider, Grid } from '@material-ui/core'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveTitleAction, saveVideoUrlAction, saveAllScribblesAction, saveNoteIdAction } from '../../redux/actions/saveNoteActions'
import { setActiveCategoryAction } from '../../redux/actions/categoryActions'
import { ICategory } from '../../interfaces/category'

type Props = {
    note: INote
}

export default function NoteCard({ note }: Props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { noteId, title, videoUrl, category, updatedAt, allScribbles } = note

    const loadNoteData = (
        noteId: string | number,
        title: string,
        videoUrl: string,
        category: ICategory | undefined,
        allScribbles: IScribble[]
    ): void => {
        dispatch(saveNoteIdAction(noteId))
        dispatch(saveTitleAction(title))
        dispatch(saveVideoUrlAction(videoUrl))
        dispatch(saveAllScribblesAction(allScribbles))

        if (category && category.categoryId) {
            dispatch(setActiveCategoryAction(category))
        }
    }

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Header note={note} loadNoteData={loadNoteData} />
                    <Link
                        onClick={() => loadNoteData(noteId, title, videoUrl, category, allScribbles)}
                        to={'/edit-note'}
                        style={{ textDecoration: 'none' }}
                        className={classes.link}>
                        <Divider className={classes.divider} />
                        <Body allScribbles={allScribbles} />
                        <Footer
                            timestamp={updatedAt}
                            category={category}
                        />
                    </Link>
                </CardContent>
            </Card>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem',
        cursor: 'pointer',
    },
    link: {
        color: theme.palette.grey[700]
    },
    cardContent: {
        '&:last-child': {
            paddingBottom: '0.5rem'
        }
    },
    divider: {
        margin: '0.5rem 0'
    },
}))