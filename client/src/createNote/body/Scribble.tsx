import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IScribble } from '../../interfaces/notes'
import { Chip } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { getColorFromTimeElapsed, formatTimestamp } from '../../utils/createNote'

export default function Scribble(props: { scribble: IScribble }) {
    const classes = useStyles()
    const { scribbleId, timeElapsed, text } = props.scribble
    const [color, setColor] = useState('rgb(255, 255, 255)')
    const duration: number = useSelector((state: any) => state.videoPlayer.duration)

    useEffect(() => {
        setColor(getColorFromTimeElapsed(timeElapsed, duration))
    }, [duration])

    return (
        <div className={classes.root}>
            <span className={classes.scribble}>
                {timeElapsed !== 0 &&
                    <Chip
                        className={classes.chip}
                        label={formatTimestamp(timeElapsed)}
                        size='small'
                        style={{ backgroundColor: color }}
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
    scribble: {
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
    },
}))