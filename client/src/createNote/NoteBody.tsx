import React, { useState } from 'react'
import { Card, CardContent, Typography, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import VideoPlayer from './VideoPlayer'
import WritingArea from './WritingArea'

export default function NoteBody() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.videoContent}>
                <VideoPlayer />
            </div>
            <Card className={classes.writingCard} variant='elevation'>
                <CardContent className={classes.writingArea}>
                    <WritingArea />
                </CardContent>
            </Card>
        </div >
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'row'
        },
    },

    // Video area
    videoContent: {
        flexGrow: 1,
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1rem'
        },
        [theme.breakpoints.up('sm')]: {
            marginRight: '1rem'
        },
    },

    // Writing area
    writingCard: {
        flexGrow: 4,
    },
    writingArea: {
    }
}))