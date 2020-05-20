import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IMessage } from '../../utils/note'
import { Chip } from '@material-ui/core'

export default function Message(props: { message: IMessage }) {
    const classes = useStyles()
    const { uuid, timestamp, text } = props.message

    return (
        <div className={classes.root}>
            <span className={classes.message}>
                {timestamp !== '' &&
                    <Chip
                        className={classes.chip}
                        label={timestamp}
                        size='small'
                        color="secondary"
                    />
                }
                {text}
            </span>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: '1rem 0',
        fontSize: 14
    },
    message: {
        textAlign: 'left'
    },
    chip: {
        marginRight: '0.5rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 14,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    }
}))