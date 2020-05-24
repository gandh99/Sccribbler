import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import MenuDisplay from './MenuDisplay'

export default function Header(props: { title: string }) {
    const classes = useStyles()
    const { title } = props

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h5" component="h2">
                {title}
            </Typography>
            <MenuDisplay />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
    },
}))