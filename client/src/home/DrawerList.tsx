import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core';
import { Link } from "react-router-dom"
import ListAltIcon from '@material-ui/icons/ListAlt'
import DrawerListItem from './DrawerListItem'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import CreateIcon from '@material-ui/icons/Create'
import { DrawerLinkType, IDrawerListItem } from '../interfaces/drawer';

export default function DrawerList() {
    const classes = useStyles()
    const [activeLink, setActiveLink] = useState(DrawerLinkType.ALL_NOTES)
    const drawerListItems: IDrawerListItem[] = [
        {
            drawerLinkType: DrawerLinkType.ALL_NOTES,
            link: '/all-notes',
            icon: <ListAltIcon />,
            text: 'All Notes'
        },
        {
            drawerLinkType: DrawerLinkType.STARRED_NOTES,
            link: '/',
            icon: <StarBorderIcon />,
            text: 'Starred Notes'
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
        </List>
    )
}

const useStyles = makeStyles((theme) => ({
    link: {
        color: theme.palette.grey[200]
    },
}))
