import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { formatTimestamp } from '../utils/allNotes'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { Tooltip } from '@material-ui/core'

export default function NoteCard(props: { timestamp: Date | undefined }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AccessTimeIcon className={classes.accessTimeIcon} />
            <Tooltip title='Last Updated Time'>
                <p>{formatTimestamp(props.timestamp)}</p>
            </Tooltip>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: 12,
        fontStyle: 'italic',
        zIndex: 3
    },
    accessTimeIcon: {
        width: '1rem',
        margin: '0.5rem',
        color: theme.palette.grey[900],
    }
}))