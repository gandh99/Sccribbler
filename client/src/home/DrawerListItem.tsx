import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { IDrawerListItem, DrawerLinkType } from '../interfaces/drawer'

type Props = {
    item: IDrawerListItem,
    setActiveLink: Function,
    activeLink: DrawerLinkType,
}

export default function DrawerListItem({item, setActiveLink, activeLink}: Props) {
    const classes = useStyles()
    const { drawerLinkType, link, icon, text } = item
    const isSelected: boolean = activeLink === drawerLinkType

    return (
        <ListItem
            className={classes.root}
            selected={isSelected}
            onClick={() => {
                setActiveLink(drawerLinkType)
            }}
            button
            key={drawerLinkType}>
            {isSelected && <div className={classes.leftBlock} />}

            <ListItemIcon className={clsx({
                [classes.activeIcon]: isSelected,
                [classes.inactiveIcon]: !isSelected,
            })}>{icon}</ListItemIcon>

            <ListItemText className={clsx({
                [classes.activeText]: isSelected,
                [classes.inactiveText]: !isSelected,
            })} primary={text} />
        </ListItem>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 0,
        height: '4rem',
        position: 'relative'
    },
    leftBlock: {
        width: '0.5rem',
        height: '100%',
        backgroundColor: theme.palette.secondary.dark,
        position: 'absolute',
        left: 0
    },
    activeIcon: {
        marginLeft: '1.5rem',
        color: theme.palette.secondary.dark
    },
    activeText: {
        marginLeft: -20,
        color: 'white'
    },
    inactiveIcon: {
        marginLeft: '1.5rem',
        color: theme.palette.grey[300]
    },
    inactiveText: {
        marginLeft: -20,
        color: theme.palette.grey[300]
    },
}))