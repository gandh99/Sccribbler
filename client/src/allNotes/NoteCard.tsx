import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { INote } from '../interfaces/notes'
import { Card, Typography, CardContent, Divider, Grid } from '@material-ui/core'
import { formatScribble, formatTimestamp } from '../utils/allNotes'
import Timestamp from './Timestamp'

export default function NoteCard(props: { note: INote }) {
    const classes = useStyles()
    const { title, videoUrl, updatedAt, allScribbles } = props.note

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Divider className={classes.divider} />
                    <div className={classes.scribblesArea}>
                        {allScribbles[0] && <p>{formatScribble(allScribbles[0].text)}</p>}
                        {allScribbles[1] && <p>{formatScribble(allScribbles[1].text)}</p>}
                        {allScribbles[2] && <p>{formatScribble(allScribbles[2].text)}</p>}
                    </div>
                    <div className={classes.footer}>
                        <Timestamp timestamp={updatedAt} />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem',
        cursor: 'pointer'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    divider: {
        margin: '0.5rem 0'
    },
    scribblesArea: {
        textAlign: 'left',
        color: theme.palette.grey[600],
        fontSize: 14
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: 12,
        fontStyle: 'italic'
    },
}))