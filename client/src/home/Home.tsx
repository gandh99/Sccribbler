import React, { useState } from 'react'
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
import CustomSnackbar from '../reusableComponents/CustomSnackbar'

export default function Home() {
    const classes = useStyles()
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <Router>
            <div className={classes.root}>
                <DrawerMenu drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
                <div className={clsx(classes.contentArea, {
                    [classes.contentShift]: drawerOpen,
                })}>
                    <div className={classes.headerArea}>
                        <Header
                            drawerOpen={drawerOpen}
                            setDrawerOpen={setDrawerOpen}
                        />
                    </div>
                    <div className={classes.pageArea}>
                        <Background />
                        <Switch>
                            <PrivateRoute path='/all-notes' component={AllNotes} />
                            <PrivateRoute path='/create-note' component={CreateNote} />
                            <Redirect from='*' to='/all-notes' />
                        </Switch>
                    </div>
                </div>
                <CustomSnackbar />
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
    }
}))