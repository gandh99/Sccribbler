import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IScribble } from '../../interfaces/notes'
import { Chip, InputBase } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { getColorFromTimeElapsed, formatTimestamp } from '../../utils/createNote'
import { setSeekTimeAction } from '../../redux/actions/videoPlayerActions'
import { saveScribbleAction } from '../../redux/actions/saveNoteActions'

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

    const onScribbleTextChange = (newText: string, scribble: IScribble): void => {
        scribble.text = newText
        dispatch(saveScribbleAction(scribble))
    }

    return (
        <div className={classes.root}>
            <span className={classes.scribbleContainer}>
                {timeElapsed !== 0 &&
                    <Chip
                        onClick={() => dispatch(setSeekTimeAction(timeElapsed))}
                        className={classes.chip}
                        label={formatTimestamp(timeElapsed)}
                        size='small'
                        style={{ backgroundColor: color }}
                    />
                }
                <InputBase 
                    className={classes.scribbleText}
                    value={scribbleText}
                    onChange={(e) => onScribbleTextChange(e.target.value, scribble)}
                />
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
    scribbleContainer: {
        textAlign: 'left'
    },
    scribbleText: {
        fontSize: 14
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
}))