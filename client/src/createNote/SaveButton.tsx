import React, { useState } from 'react'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SaveIcon from '@material-ui/icons/Save'

export default function NoteHeader() {
    const classes = useStyles()

    return (
        <Tooltip title={'Save Note'}>
            <SaveIcon
                className={classes.icon}
            />
        </Tooltip>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    icon: {
        color: theme.palette.secondary.dark,
        cursor: 'pointer',
        padding: '0 0.5rem'
    },
}))