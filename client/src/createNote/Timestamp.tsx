import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core'
import UpdateIcon from '@material-ui/icons/Update'
import Tooltip from '@material-ui/core/Tooltip'

export default function TypingBar() {
    const classes = useStyles()
    const icon =
        <Tooltip title='Update timestamp'>
            <UpdateIcon className={classes.icon} />
        </Tooltip>

    return (
        <Chip
            className={classes.root}
            icon={icon}
            label="1:10:10"
            color="secondary"
        />
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    icon: {
        cursor: 'pointer'
    }
}))