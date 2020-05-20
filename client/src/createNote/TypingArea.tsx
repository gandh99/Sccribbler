import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextareaAutosize from 'react-autosize-textarea'
import CreateIcon from '@material-ui/icons/Create'
import Timestamp from './Timestamp'
import { useDispatch, useSelector } from 'react-redux'
import { initiateTimestampRequestAction, resetTimestampAction } from '../redux/actions/createNoteActions'

export default function TypingArea() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const currentTimestamp = useSelector((state: any) => state.createNote.timestamp)
    const [timestamp, setTimestamp] = useState('')
    const [message, setMessage] = useState('')

    // Get, set, and then reset the timestamp from the store
    useEffect(() => {
        if (currentTimestamp !== '') {
            setTimestamp(currentTimestamp)
            dispatch(resetTimestampAction())
        }
    }, [currentTimestamp])

    // Get timestamp only if user is typing a "new" message
    const shouldGetTimestamp = (prevMessage: string, timestamp: string): boolean => {
        return prevMessage === '' && timestamp === ''
    }

    const onTextareaChange = (value: string): void => {
        if (shouldGetTimestamp(message, timestamp)) {
            dispatch(initiateTimestampRequestAction())
        }
        setMessage(value)
    }

    const onSubmit = (event: MouseEvent, message: string): void => {
        event.preventDefault()

        // Reset the message and the timestamps
        setMessage('')
        setTimestamp('')
        dispatch(resetTimestampAction())
    }

    return (
        <>
            <div className={classes.timestampArea}>
                <Timestamp timestamp={timestamp} />
            </div>
            <form onSubmit={(e: any) => { onSubmit(e, message) }} className={classes.root}>
                <TextareaAutosize
                    value={message}
                    className={classes.messageArea}
                    placeholder='Scribble some notes ...'
                    rows={1}
                    onChange={(e: any) => { onTextareaChange(e.target.value) }}
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