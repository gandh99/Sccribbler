import React, { useState } from 'react'
import { Card } from '@material-ui/core'
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
                <WritingArea />
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
            flexDirection: 'row',
            height: '100%'
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
        border: 'solid 10px transparent',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5rem'
        },
        [theme.breakpoints.up('sm')]: {
            height: '100%',
            overflow: 'auto',
            overflowY: 'scroll',
            scrollbarWidth: 'none', /* Firefox */
        },
    }
}))