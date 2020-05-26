import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Grid, DialogActions, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { ISharedNote } from '../interfaces/notifications'

type Props = {
    sharedNote: ISharedNote
}

export default function SharedNote({ sharedNote }: Props) {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <span className={classes.username}>{sharedNote.username}</span>
                    <span> wants to share their note: </span>
                    <span className={classes.noteTitle}>{sharedNote.title}</span>
                    <span> with you. </span>
                </CardContent>
                <DialogActions>
                    <Button className={classes.rejectButton}>
                        Reject
                    </Button>
                    <Button className={classes.acceptButton} autoFocus>
                        Accept
                    </Button>
                </DialogActions>
            </Card>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem',
        cursor: 'pointer',
        padding: '0.5rem 1rem'
    },
    cardContent: {
        textAlign: 'justify',
        '&:last-child': {
            paddingBottom: '0.5rem'
        }
    },
    username: {
        fontWeight: 'bold'
    },
    noteTitle: {
        fontWeight: 'bold'
    },
    acceptButton: {
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        fontSize: 12
    },
    rejectButton: {
        color: theme.palette.grey[600],
        fontSize: 12
    }
}))