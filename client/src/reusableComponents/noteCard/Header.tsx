import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import MenuDisplay from './MenuDisplay'
import { INote } from '../../interfaces/notes'

export default function Header(props: { note: INote }) {
    const classes = useStyles()
    const { note } = props

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h5" component="h2">
                {note.title}
            </Typography>
            <MenuDisplay note={note} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
    },
}))