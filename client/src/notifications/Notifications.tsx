import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { ISharedNote } from '../interfaces/notifications'
import Header from './Header'
import SharedNote from './SharedNote'

export default function Notifications() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const allNotesSharedWithMe: ISharedNote[] = useSelector((state: any) => state.notifications.allNotesSharedWithMe)

    return (
        <div className={classes.root}>
            <Header 
                title={'Shared Notes'}
            />
            {allNotesSharedWithMe && allNotesSharedWithMe.map((sharedNote: ISharedNote) => {
                return <SharedNote sharedNote={sharedNote} />
            })}
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