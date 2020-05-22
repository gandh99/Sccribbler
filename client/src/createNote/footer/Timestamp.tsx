import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Chip } from '@material-ui/core'
import UpdateIcon from '@material-ui/icons/Update'
import Tooltip from '@material-ui/core/Tooltip'
import { useDispatch } from 'react-redux'
import { requestForTimeElapsedAction } from '../../redux/actions/videoPlayerActions'

export default function Timestamp(props: { timestamp: string }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const icon =
        <Tooltip title='Update timestamp'>
            <UpdateIcon
                onClick={() => dispatch(requestForTimeElapsedAction())}
                className={classes.icon}
            />
        </Tooltip>

    return (
        <>
            {props.timestamp !== '' &&
                <Chip
                    className={classes.root}
                    icon={icon}
                    label={props.timestamp}
                    color="secondary"
                />
            }
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    icon: {
        cursor: 'pointer'
    }
}))