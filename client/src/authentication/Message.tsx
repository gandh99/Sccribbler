import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import { AuthenticationForm } from './AuthenticationPage'

type Props = {
    mainMessage: string,
    linkMessage: string,
    setForm: any,
    link: AuthenticationForm
}

export default function Message({mainMessage, linkMessage, setForm, link}: Props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography className={classes.message} variant="h6">
                {mainMessage} <span className={classes.link} onClick={() => setForm(link)}>{linkMessage}</span>
            </Typography>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem'
    },
    message: {
        fontSize: 14,
        fontWeight: 'normal',
        color: theme.palette.grey[800]
    },
    link: {
        color: theme.palette.secondary.main,
        cursor: 'pointer',
        textDecoration: 'none',
        fontWeight: 500
    }
}))