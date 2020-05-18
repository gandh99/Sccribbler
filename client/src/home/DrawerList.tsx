import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '@material-ui/core';
import { Link } from "react-router-dom"
import ListAltIcon from '@material-ui/icons/ListAlt'
import DrawerListItem from './DrawerListItem'
import StarBorderIcon from '@material-ui/icons/StarBorder'

export enum DrawerLinkType {
    ALL_NOTES,
    STARRED_NOTES
}

export interface IDrawerListItem {
    drawerLinkType: DrawerLinkType,
    link: string,
    icon: any,
    text: string
}

export default function DrawerList() {
    const classes = useStyles()
    const [activeLink, setActiveLink] = useState(DrawerLinkType.ALL_NOTES)
    const drawerListItems: IDrawerListItem[] = [
        {
            drawerLinkType: DrawerLinkType.ALL_NOTES,
            link: '/',
            icon: <ListAltIcon />,
            text: 'All Notes'
        },
        {
            drawerLinkType: DrawerLinkType.STARRED_NOTES,
            link: '/',
            icon: <StarBorderIcon />,
            text: 'Starred Notes'
        },
    ]

    return (
        <List>
            {drawerListItems.map((drawerListItem: IDrawerListItem) => {
                return (
                    <Link to={drawerListItem.link} style={{ textDecoration: 'none' }} className={classes.link}>
                        <DrawerListItem
                            item={drawerListItem}
                            setActiveLink={setActiveLink}
                            activeLink={activeLink}
                        />
                    </Link>
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
