import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

export default function VideoPlayer() {
    const classes = useStyles()

    return (
        <iframe
            id='video-player'
            width="100%"
            height="300px"
            src="https://www.youtube.com/embed/-RCnNyD0L-s"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
}))

