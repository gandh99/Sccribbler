import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextareaAutosize from 'react-autosize-textarea'
import SendIcon from '@material-ui/icons/Send'

export default function TypingBar() {
    const classes = useStyles()
    const [message, setMessage] = useState('')

    const onSubmit = (event: MouseEvent, message: string): void => {
        event.preventDefault()
    }

    return (
        <form onSubmit={(e: any) => { onSubmit(e, message) }} className={classes.root}>
            <TextareaAutosize
                value={message}
                className={classes.messageArea}
                placeholder='Scribble some notes ...'
                rows={1}
                onChange={(e: any) => { setMessage(e.target.value) }}
            />
            <SendIcon
                onClick={(e: any) => onSubmit(e, message)}
                className={classes.sendIcon}
            />
        </form>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '1rem',
        backgroundColor: theme.palette.grey[200]
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
    sendIcon: {
        marginLeft: '1rem',
        padding: '0 0.8rem',
        color: theme.palette.primary.dark,
        cursor: 'pointer'
    }
}))