import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Grid, DialogActions, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { ISharedNote } from '../interfaces/notifications'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import { respondToSharedNoteAction } from '../redux/actions/notificationsActions'

type Props = {
    sharedNote: ISharedNote
}

export default function SharedNote({ sharedNote }: Props) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const respond = (sharedNote: ISharedNote, accept: boolean): void => {
        dispatch(respondToSharedNoteAction(sharedNote, accept))
    }

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
                    {!sharedNote.seen &&
                        <NewReleasesIcon className={classes.newIcon} />}
                    <Button onClick={() => respond(sharedNote, false)} className={classes.rejectButton}>
                        Reject
                    </Button>
                    <Button onClick={() => respond(sharedNote, true)} className={classes.acceptButton} autoFocus>
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
    newIcon: {
        color: theme.palette.success.main,
        marginRight: 'auto'
    },
    acceptButton: {
        backgroundColor: theme.palette.primary.dark,
        color: 'white',
        fontSize: 12,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            opacity: 0.8
        }
    },
    rejectButton: {
        color: theme.palette.grey[600],
        fontSize: 12
    }
}))