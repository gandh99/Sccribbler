import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { ISharedNote } from '../interfaces/notifications'
import Header from './Header'
import { markSharedNotesAsSeenAction } from '../redux/actions/notificationsActions'
import SharedNotesDisplayArea from './SharedNotesDisplayArea'

export default function Notifications() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const allNotesSharedWithMe: ISharedNote[] = useSelector((state: any) => state.notifications.allNotesSharedWithMe)

    useEffect(() => {
        return () => {
            dispatch(markSharedNotesAsSeenAction())
        }
    }, [])

    return (
        <div className={classes.root}>
            <Header title={'Shared Notes'} />
            <SharedNotesDisplayArea allNotesSharedWithMe={allNotesSharedWithMe} />
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