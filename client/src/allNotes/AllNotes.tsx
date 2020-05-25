import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { getAllNotesAction } from '../redux/actions/getShareDeleteNoteActions'
import NotesDisplayArea from './body/NotesDisplayArea'
import { showLoadingBackgroundAction, hideLoadingBackgroundAction, showSnackbarAction } from '../redux/actions/globalDisplayActions'
import Header from './header/Header'
import { getCategoriesAction } from '../redux/actions/categoryActions'

export default function AllNotes() {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(showLoadingBackgroundAction('Retrieving notes...'))
        dispatch(getCategoriesAction(
            () => showSnackbarAction('Error retrieving categories.', 'error')
        ))
        dispatch(getAllNotesAction(
            () => dispatch(hideLoadingBackgroundAction()),
            () => showSnackbarAction('Error retrieving notes. Please try again later.', 'error')
        ))
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.contentArea}>
                <NotesDisplayArea />
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        width: '100%',
    },
    header: {
        margin: '1rem 2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    contentArea: {
        margin: '1rem'
    }
}))