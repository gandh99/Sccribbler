import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

export default function MenuDisplay() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            <MoreVertIcon
                onClick={handleClick}
                className={classes.moreVertIcon}
                aria-controls="simple-menu"
                aria-haspopup="true"
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Delete Note</MenuItem>
            </Menu>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
        zIndex: 3
    },
    moreVertIcon: {
        marginLeft: 'auto',
        marginBottom: '0.5rem',
        color: theme.palette.grey[700],
        zIndex: 3
    },
}))