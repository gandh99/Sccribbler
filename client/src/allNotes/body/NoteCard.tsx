import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { INote } from '../../interfaces/notes'
import { Card, Typography, CardContent, Divider, Grid, Chip } from '@material-ui/core'
import { formatScribble, formatTimestamp } from '../../utils/allNotes'
import Timestamp from './Timestamp'

export default function NoteCard(props: { note: INote }) {
    const classes = useStyles()
    const { title, videoUrl, category, updatedAt, allScribbles } = props.note

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardContent>
                    <div className={classes.header}>
                        <Typography className={classes.title} variant="h5" component="h2">
                            {title}
                        </Typography>
                        {category?.categoryId &&
                            <Chip
                                className={classes.chip}
                                label={category.name}
                                size='small'
                            />
                        }
                    </div>
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

    // Header
    header: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    chip: {
        marginLeft: 'auto',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 14,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    divider: {
        margin: '0.5rem 0'
    },

    // Body
    scribblesArea: {
        textAlign: 'left',
        color: theme.palette.grey[600],
        fontSize: 14
    },

    // Footer
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: 12,
        fontStyle: 'italic'
    },
}))