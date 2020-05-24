import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import Logo from './Logo'
import Background from './Background'
import CustomSnackbar from '../reusableComponents/globalDisplay/CustomSnackbar'
import LoadingBackground from '../reusableComponents/globalDisplay/LoadingBackground'

export enum AuthenticationForm {
    LOGIN,
    REGISTER
}

export default function AuthenticationPage() {
    const classes = useStyles()
    const [form, setForm] = useState(AuthenticationForm.LOGIN)

    return (
        <div className={classes.root}>
            <Background />
            <Logo />
            {form === AuthenticationForm.LOGIN
                ? <LoginForm setForm={setForm} />
                : <RegisterForm setForm={setForm} />}
            <CustomSnackbar />
            <LoadingBackground />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '4rem'
    },
}))