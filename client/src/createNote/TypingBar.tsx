import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextareaAutosize from 'react-autosize-textarea'
import CreateIcon from '@material-ui/icons/Create'
import Timestamp from './Timestamp'

export default function TypingBar() {
    const classes = useStyles()
    const [message, setMessage] = useState('')

    const onSubmit = (event: MouseEvent, message: string): void => {
        event.preventDefault()
    }

    return (
        <>
            <div className={classes.timestampArea}>
                <Timestamp />
            </div>
            <form onSubmit={(e: any) => { onSubmit(e, message) }} className={classes.root}>
                <TextareaAutosize
                    value={message}
                    className={classes.messageArea}
                    placeholder='Scribble some notes ...'
                    rows={1}
                    onChange={(e: any) => { setMessage(e.target.value) }}
                />
                <CreateIcon
                    onClick={(e: any) => onSubmit(e, message)}
                    className={classes.createIcon}
                />
            </form>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '1rem',
        backgroundColor: theme.palette.grey[200]
    },
    timestampArea: {
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '0.5rem',
        marginBottom: '0.5rem'
    },
    messageArea: {
        border: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        resize: 'none',
        overflowY: 'hidden',
        fontFamily: 'inherit',
        fontSize: 16
    },
    createIcon: {
        marginLeft: '1rem',
        padding: '0 0.8rem',
        color: theme.palette.primary.dark,
        cursor: 'pointer'
    }
}))