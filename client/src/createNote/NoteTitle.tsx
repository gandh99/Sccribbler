import React, { useState } from 'react'
import { Card, CardContent, Typography, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export default function NoteTitle() {
    const classes = useStyles()
    const [title, setTitle] = useState('')

    return (
        <Card variant='elevation'>
            <CardContent className={classes.root}>
                <InputBase
                    className={classes.textInput}
                    onChange={event => setTitle(event.target.value)}
                    required
                    placeholder={'Add a Title...'}
                    value={title}
                />
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    textInput: {
        width: '100%',
    }
}))