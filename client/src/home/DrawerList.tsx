import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core';
import { Link } from "react-router-dom"
import ListAltIcon from '@material-ui/icons/ListAlt'
import DrawerListItem from './DrawerListItem'
import NotificationsIcon from '@material-ui/icons/Notifications'
import CreateIcon from '@material-ui/icons/Create'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { DrawerLinkType, IDrawerListItem } from '../interfaces/drawer'
import { useDispatch } from 'react-redux'
import { logoutUserAction } from '../redux/actions/authenticationActions';

export default function DrawerList() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [activeLink, setActiveLink] = useState(DrawerLinkType.ALL_NOTES)
    const drawerListItems: IDrawerListItem[] = [
        {
            drawerLinkType: DrawerLinkType.ALL_NOTES,
            link: '/all-notes',
            icon: <ListAltIcon />,
            text: 'All Notes'
        },
        {
            drawerLinkType: DrawerLinkType.NOTIFICATIONS,
            link: '/notifications',
            icon: <NotificationsIcon />,
            text: 'Notifications'
        },
        {
            drawerLinkType: DrawerLinkType.CREATE_NOTE,
            link: '/create-note',
            icon: <CreateIcon />,
            text: 'Create Note'
        },
    ]

    return (
        <List>
            {drawerListItems.map((drawerListItem: IDrawerListItem) => {
                return (
                    <div key={drawerListItem.drawerLinkType}>
                        <Link to={drawerListItem.link} style={{ textDecoration: 'none' }} className={classes.link}>
                            <DrawerListItem
                                item={drawerListItem}
                                setActiveLink={setActiveLink}
                                activeLink={activeLink}
                            />
                        </Link>
                    </div>
                )
            })}
            <div onClick={() => dispatch(logoutUserAction())}>
                <DrawerListItem
                    item={{
                        drawerLinkType: DrawerLinkType.LOGOUT,
                        link: '/authentication',
                        icon: <ExitToAppIcon />,
                        text: 'Logout'
                    }}
                    setActiveLink={setActiveLink}
                    activeLink={activeLink}
                />
            </div>
        </List>
    )
}

const useStyles = makeStyles((theme) => ({
    link: {
        color: theme.palette.grey[200]
    },
}))
