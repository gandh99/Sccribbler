import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Backdrop, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

export default function LoadingBackground() {
    const classes = useStyles()
    const show = useSelector((state: any) => state.globalDisplay.loadingBackground.show)
    const message = useSelector((state: any) => state.globalDisplay.loadingBackground.message)

    return (
        <Backdrop className={classes.backdrop} open={show}>
            <CircularProgress color="inherit" />
            <p className={classes.message}>{message}</p>
        </Backdrop>
    )
}

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column'
    },
    message: {
        margin: '1rem 0',
        fontSize: '1.5rem'
    }
}))