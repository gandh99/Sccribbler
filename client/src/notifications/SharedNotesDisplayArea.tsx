import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { ISharedNote } from '../interfaces/notifications'
import SharedNote from './SharedNote'

type Props = {
    allNotesSharedWithMe: ISharedNote[]
}

export default function SharedNotesDisplayArea({ allNotesSharedWithMe }: Props) {
    const classes = useStyles()

    return (
        <Grid
            className={classes.root}
            container
            spacing={0}
            direction="row"
            justify="flex-start"
            alignItems="center" >
            {allNotesSharedWithMe && allNotesSharedWithMe.map((sharedNote: ISharedNote) => {
                return <SharedNote sharedNote={sharedNote} />
            })}
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))