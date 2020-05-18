import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export default function Background() {
    const classes = useStyles()

    return (
        <div className={classes.root} />
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        position: 'fixed',
        top: 0,
        height: '100vh',
        width: '100vw',
        zIndex: -5
    },
}))