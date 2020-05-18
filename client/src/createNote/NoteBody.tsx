import React, { useState } from 'react'
import { Card, CardContent, Typography, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import VideoPlayer from './VideoPlayer'
import WritingArea from './WritingArea'

export default function NoteBody() {
    const classes = useStyles()

    return (
        <Card className={classes.root} variant='elevation'>
            <CardContent className={classes.contentArea}>
                <section className={classes.videoArea}>
                    <VideoPlayer />
                </section>
                <section className={classes.writingArea}>
                    <WritingArea />
                </section>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    contentArea: {
        display: 'flex',
        flexDirection: 'row'
    },
    videoArea: {
        flexGrow: 1,
        margin: '0.5rem'
    },
    writingArea: {
        flexGrow: 4,
        margin: '0.5rem'
    }
}))