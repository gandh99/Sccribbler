import React, { useState } from 'react'
import { Card, CardContent, Typography, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import VideoPlayer from './VideoPlayer'

export default function WritingArea() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            xxx
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    contentArea: {
        display: 'flex',
        flexDirection: 'row'
    }
}))