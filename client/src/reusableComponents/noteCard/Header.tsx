import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import MenuDisplay from './MenuDisplay'
import { INote } from '../../interfaces/notes'
import { Link } from 'react-router-dom'

export default function Header(props: { note: INote, loadNoteData: Function }) {
    const classes = useStyles()
    const { note, loadNoteData } = props

    return (
        <div className={classes.root}>
            <Link
                onClick={() => loadNoteData(note.title, note.videoUrl, note.category, note.allScribbles)}
                to={'/edit-note'}
                style={{ textDecoration: 'none' }}
                className={classes.link}>
                <Typography className={classes.title} variant="h5" component="h2">
                    {note.title}
                </Typography>
            </Link>
            <MenuDisplay note={note} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    link: {
        color: theme.palette.grey[700],
        width: '100%'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
}))