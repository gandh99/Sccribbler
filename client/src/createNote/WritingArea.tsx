import React, { useState } from 'react'
import { Card, CardContent, Typography, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export default function WritingArea() {
    const classes = useStyles()

    return (
        <Card className={classes.root} variant='elevation'>
            <CardContent>
                
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
}))