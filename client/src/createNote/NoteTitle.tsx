import React, { useState } from 'react'
import { Card, CardContent, Typography, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export default function NoteTitle() {
    const classes = useStyles()
    const [title, setTitle] = useState('')

    return (
        <Card variant='elevation'>
            <CardContent className={classes.cardContent}>
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
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0.5rem 1.5rem',
        "&:last-child": {
            paddingBottom: '0.5rem'
        }
    },
    textInput: {
        width: '100%',
    }
}))