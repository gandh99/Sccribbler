import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogContent, InputBase, DialogActions, Button } from '@material-ui/core'
import { INote } from '../../interfaces/notes'
import { useDispatch } from 'react-redux'
import { showSnackbarAction } from '../../redux/actions/globalDisplayActions'
import { shareNoteAction } from '../../redux/actions/getShareDeleteNoteActions'

type Props = {
    open: boolean,
    setOpen: Function,
    note: INote
}

export default function ShareNoteDialog({ open, setOpen, note }: Props) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')

    useEffect(() => {
        return () => {
            setUsername('')
        }
    }, [])

    const handleClose = () => {
        setOpen(false)
    }

    const shareNote = (note: INote, username: string): void => {
        if (username === '') return
        dispatch(shareNoteAction(
            note,
            username,
            () => dispatch(showSnackbarAction('Successfully shared note.', 'success')),
            (errorMsg: string) => dispatch(showSnackbarAction(errorMsg, 'error')),
        ))
        handleClose()
    }

    return (
        <Dialog
            className={classes.root}
            fullWidth={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Share Note</DialogTitle>
            <DialogContent>
                <InputBase
                    value={username}
                    className={classes.input}
                    placeholder='Enter username of recipient...'
                    onChange={(e: any) => setUsername(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} className={classes.button}>
                    Cancel
                </Button>
                <Button onClick={() => shareNote(note, username)} className={classes.button} autoFocus>
                    Share
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
        zIndex: 3
    },
    input: {
        width: '100%',
    },
    button: {
        color: theme.palette.primary.dark
    }
}))