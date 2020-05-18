import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Hidden, AppBar, Toolbar } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export default function Header(props: any) {
    const classes = useStyles()

    return (
        <Hidden smUp>
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar} elevation={0}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.left}>
                            <IconButton
                                onClick={() => props.setDrawerOpen(true)}
                                edge="start"
                                className={classes.iconButton}
                                aria-label="menu">
                                <MenuIcon className={classes.menuIcon} fontSize='large' />
                            </IconButton>
                        </div>
                        <div className={classes.center}>
                            <Typography className={classes.logoText} variant="h6" color="inherit">
                                Scribbler
                            </Typography>
                        </div>
                        <div className={classes.right}>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </Hidden>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.dark,
        height: '4rem',
        display: 'flex',
        flexDirection: 'row'
    },

    // Icon
    iconButton: {
        float: 'left'
    },
    menuIcon: {
        color: 'white'
    },

    // Logo
    logoText: {
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 800,
        fontSize: 16
    },

    // Header
    appBar: {
        backgroundColor: theme.palette.primary.dark
    },
    toolbar: {
        height: '4rem',
        display: 'flex'
    },

    // Misc
    left: {
        flex: 1,
        alignItems: 'left'
    },
    center: {
    },
    right: {
        flex: 1,
    },
}))