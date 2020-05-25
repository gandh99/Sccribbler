import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Menu, MenuItem } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { INote, IScribble } from '../../interfaces/notes'
import { useDispatch } from 'react-redux'
import { deleteNoteAction } from '../../redux/actions/getOrDeleteNoteActions'
import { showSnackbarAction } from '../../redux/actions/globalDisplayActions'

type Props = {
    scribble: IScribble
}

export default function ScribbleMenu({ scribble }: Props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const deleteScribble = (scribble: IScribble): void => {
        // dispatch(deleteNoteAction(
        //     scribble,
        //     () => dispatch(showSnackbarAction('Successfully deleted note.', 'success')),
        //     () => dispatch(showSnackbarAction('Error deleting note.', 'error'))
        // ))
        handleClose()
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
                onClose={handleClose}>
                <MenuItem className={classes.menu} onClick={() => deleteScribble(scribble)}>
                    Star
                </MenuItem>
                <MenuItem className={classes.menu} onClick={() => deleteScribble(scribble)}>
                    Delete
                </MenuItem>
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
        cursor: 'pointer',
        zIndex: 3
    },
    menu: {
        fontSize: 14
    }
}))