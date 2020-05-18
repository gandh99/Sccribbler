import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Hidden, Typography } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import LogoImage from '../images/logo.png'
import DrawerList from './DrawerList'

export default function DrawerMenu(props: any) {
    const { container } = props
    const classes = useStyles()
    const theme = useTheme()

    const handleDrawerToggle = () => {
        props.setDrawerOpen(!props.drawerOpen);
    };

    const drawer = (
        <div className={classes.root}>
            <div className={classes.logoArea}>
                <img className={classes.logo} src={LogoImage} />
                <Typography className={classes.logoText} variant="h5" component="h5">
                    Scribbler
                </Typography>
            </div>
            <DrawerList />
        </div>
    )

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.drawerOpen}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <div className={classes.permanentDrawer}>
                    {drawer}
                </div>
            </Hidden>
        </nav>
    )
}

const drawerWidth = 200
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.primary.dark,
        height: '100vh'
    },

    // Drawer
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    permanentDrawer: {
        position: 'fixed',
        height: '100vh',
        width: drawerWidth,
        borderRight: 'solid 1px lightgray'
    },

    // Logo area
    logoArea: {
        padding: '1rem 0',
        margin: '0 auto'
    },
    logo: {
        width: '4rem'
    },
    logoText: {
        color: 'white',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 800,
        fontSize: 14
    },

    // Body
    body: {
    },
    link: {
        color: theme.palette.text.primary
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: drawerWidth,
    },
}))
