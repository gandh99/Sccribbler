import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { IScribble } from '../../interfaces/notes'
import Scribble from './Scribble'
import { Divider } from '@material-ui/core'

export default function ScribbleDisplayArea() {
    const classes = useStyles()
    const [allScribbles, setAllScribbles] = useState<IScribble[]>([])
    const allScribblesStore: IScribble[] = useSelector((state: any) => state.createNote.allScribbles)

    useEffect(() => {
        setAllScribbles(allScribblesStore)
    }, [allScribblesStore])

    return (
        <div className={classes.root}>
            {allScribbles.map((scribble: IScribble, index: number) => {
                return (
                    <div key={scribble.scribble_id}>
                        <Scribble scribble={scribble} />
                        {index < allScribbles.length - 1 && <Divider variant="middle" />}
                    </div>
                )
            })}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))