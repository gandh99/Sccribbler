import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextareaAutosize from 'react-autosize-textarea'
import CreateIcon from '@material-ui/icons/Create'
import Timestamp from './Timestamp'
import { useDispatch, useSelector } from 'react-redux'
import { saveScribbleAction } from '../../redux/actions/saveNoteActions'
import { v4 as uuidv4 } from 'uuid'
import { Tooltip } from '@material-ui/core'
import { formatTimestamp } from '../../utils/createNote'
import { resetTimeElapsedAction, requestForTimeElapsedAction } from '../../redux/actions/videoPlayerActions'

export default function TypingArea() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const currentTimeElapsed = useSelector((state: any) => state.videoPlayer.timeElapsed)
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [scribble, setScribble] = useState('')

    // Get, set, and then reset the time elapsed from the store
    useEffect(() => {
        if (currentTimeElapsed !== 0) {
            setTimeElapsed(currentTimeElapsed)
            dispatch(resetTimeElapsedAction())
        }
    }, [currentTimeElapsed])

    const isNewScribble = (prevScribble: string, timeElapsed: number): boolean => {
        return prevScribble === '' && timeElapsed === 0
    }

    const onTextareaChange = (value: string): void => {
        if (isNewScribble(scribble, timeElapsed)) {
            dispatch(requestForTimeElapsedAction())
        }
        setScribble(value)
    }

    const onSubmit = (event: MouseEvent, scribble: string): void => {
        event.preventDefault()

        // Only dispatch the scribble to the store if it is not empty
        if (scribble !== '') {
            dispatch(saveScribbleAction({
                scribbleId: uuidv4(),
                timeElapsed,
                text: scribble.trim(),
            }))
        }

        reset()
    }

    const reset = (): void => {
        // Reset the scribble and the time elapsed
        setScribble('')
        setTimeElapsed(0)
        dispatch(resetTimeElapsedAction())
    }

    return (
        <>
            <div className={classes.timestampArea}>
                <Timestamp timestamp={formatTimestamp(timeElapsed)} />
            </div>
            <form onSubmit={(e: any) => { onSubmit(e, scribble) }} className={classes.root}>
                <TextareaAutosize
                    value={scribble}
                    className={classes.scribbleArea}
                    placeholder='Scribble some notes ...'
                    rows={1}
                    onChange={(e: any) => { onTextareaChange(e.target.value) }}
                />
                <Tooltip title={'Submit'}>
                    <CreateIcon
                        onClick={(e: any) => onSubmit(e, scribble)}
                        className={classes.createIcon}
                    />
                </Tooltip>
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
    scribbleArea: {
        border: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        resize: 'none',
        overflowY: 'hidden',
        fontFamily: 'inherit',
        fontSize: 16,
    },
    createIcon: {
        marginLeft: '1rem',
        padding: '0 0.8rem',
        color: theme.palette.primary.dark,
        cursor: 'pointer'
    }
}))