import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom"
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import DrawerMenu from './DrawerMenu'
import { PrivateRoute } from '../reusableComponents/PrivateRoute'
import Header from './Header'
import AllNotes from '../allNotes/AllNotes'
import CreateNote from '../createNote/CreateNote'
import Background from './Background'
import CustomSnackbar from '../reusableComponents/globalDisplay/CustomSnackbar'
import LoadingBackground from '../reusableComponents/globalDisplay/LoadingBackground'
import EditNote from '../allNotes/EditNote'
import { useDispatch } from 'react-redux'
import { getNotesSharedWithMeAction } from '../redux/actions/notificationsActions'
import Notifications from '../notifications/Notifications'
import { initIO } from '../config/io'

export default function Home() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [drawerOpen, setDrawerOpen] = useState(false)

    useEffect(() => {
        initIO(dispatch)
        dispatch(getNotesSharedWithMeAction())
        return () => {
        }
    }, [])

    return (
        <Router>
            <div className={classes.root}>
                <DrawerMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                <div className={clsx(classes.contentArea, {
                    [classes.contentShift]: drawerOpen,
                })}>
                    <div className={classes.headerArea}>
                        <Header setDrawerOpen={setDrawerOpen} />
                    </div>
                    <div className={classes.pageArea}>
                        <Background />
                        <Switch>
                            <PrivateRoute path='/all-notes' component={AllNotes} />
                            <PrivateRoute path='/edit-note' component={EditNote} />
                            <PrivateRoute path='/create-note' component={CreateNote} />
                            <PrivateRoute path='/notifications' component={Notifications} />
                            <Redirect from='*' to='/all-notes' />
                        </Switch>
                    </div>
                </div>
                <CustomSnackbar />
                <LoadingBackground />
            </div>
        </Router>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    contentArea: {
        flexGrow: 1,
        margin: 0,
        padding: 0
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    headerArea: {
    },
    pageArea: {
    },
}))