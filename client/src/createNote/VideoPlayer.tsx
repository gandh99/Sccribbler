import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CardContent, Card } from '@material-ui/core'

export default function VideoPlayer() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Card className={classes.toolbar}>
                <CardContent className={classes.toolbarContent}>
                    x
                </CardContent>
            </Card>
            <iframe
                id='video-player'
                width="99%"
                height="300px"
                src="https://www.youtube.com/embed/-RCnNyD0L-s"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
    toolbar: {
        width: '100%',
        backgroundColor: 'white',
    },
    toolbarContent: {
        padding: '0.5rem',
        "&:last-child": {
            paddingBottom: '0.5rem'
        }
    }
}))

