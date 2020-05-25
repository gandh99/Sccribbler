import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IScribble } from '../../interfaces/notes'
import { Chip } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { getColorFromTimeElapsed, formatTimestamp } from '../../utils/createNote'
import { setSeekTimeAction } from '../../redux/actions/videoPlayerActions'
import { saveScribbleAction } from '../../redux/actions/saveNoteActions'
import ScribbleMenu from './ScribbleMenu'
import { TextareaAutosize } from 'react-autosize-textarea/lib/TextareaAutosize'

type Props = {
    scribble: IScribble
}

export default function Scribble({ scribble }: Props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { scribbleId, timeElapsed, text } = scribble
    const [scribbleText, setScribbleText] = useState('')
    const [color, setColor] = useState('rgb(255, 255, 255)')
    const duration: number = useSelector((state: any) => state.videoPlayer.duration)

    useEffect(() => {
        setColor(getColorFromTimeElapsed(timeElapsed, duration))
    }, [duration])

    useEffect(() => {
        setScribbleText(text)
    }, [text])

    const saveScribble = (newText: string, scribble: IScribble): void => {
        scribble.text = newText
        dispatch(saveScribbleAction(scribble))
    }

    return (
        <div className={classes.root}>
            {timeElapsed !== 0 &&
                <Chip
                    onClick={() => dispatch(setSeekTimeAction(timeElapsed))}
                    className={classes.chip}
                    label={formatTimestamp(timeElapsed)}
                    size='small'
                    style={{ backgroundColor: color }}
                />
            }
            <TextareaAutosize
                className={classes.scribbleTextArea}
                value={scribbleText}
                onChange={(e: any) => setScribbleText(e.target.value)}
                onBlur={() => saveScribble(scribbleText, scribble)}
            />
            <ScribbleMenu scribble={scribble} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: '1rem 0',
        fontSize: 14,
        height: '100%',
    },
    chip: {
        marginRight: '0.5rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 14,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    scribbleTextArea: {
        border: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        resize: 'none',
        overflowY: 'hidden',
        fontFamily: 'inherit',
        fontSize: 16,
    }
}))