import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { INote } from '../../interfaces/notes'
import { Card, CardContent, Divider, Grid } from '@material-ui/core'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { saveTitleAction, saveVideoUrlAction, saveAllScribblesAction } from '../../redux/actions/saveNoteActions'
import { setActiveCategoryAction } from '../../redux/actions/categoryActions'

export default function NoteCard(props: { note: INote }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { title, videoUrl, category, updatedAt, allScribbles } = props.note

    const loadNoteData = (): void => {
        dispatch(saveTitleAction(title))
        dispatch(saveVideoUrlAction(videoUrl))
        dispatch(saveAllScribblesAction(allScribbles))

        if (category) {
            dispatch(setActiveCategoryAction(category))
        }
    }

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Header note={props.note} />
                    <Divider className={classes.divider} />
                    <Link onClick={loadNoteData} to={'/edit-note'} style={{ textDecoration: 'none' }} className={classes.link}>
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