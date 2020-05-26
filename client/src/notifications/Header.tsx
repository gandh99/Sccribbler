import React from 'react'
import { Card, CardContent, Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

type Props = {
    title: string
}

export default function Header({ title }: Props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant='h6'>
                {title}
            </Typography>
            <Divider />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem'
    },
    title: {
        textAlign: 'left',
        margin: '1rem 0',
        color: theme.palette.grey[600]
    }
}))