import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CardContent, Card, InputBase } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import { isValidUrl, getYTVideoId } from '../../utils/videoPlayer.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { showSnackbarAction } from '../../redux/actions/globalNotificationActions'
import YouTube from 'react-youtube'
import Tooltip from '@material-ui/core/Tooltip'
import { fulfillTimestampRequestAction, createVideoUrlAction } from '../../redux/actions/createNoteActions'
import { formatTimestamp } from '../../utils/createNote'

export default function VideoPlayer() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isRequestingTimestamp = useSelector((state: any) => state.createNote.isRequestingTimestamp)
    const [rawUrlInput, setRawUrlInput] = useState('')
    
    // Used for the video player only
    const [videoSrc, setVideoSrc] = useState('')
    const [timeElapsed, setTimeElapsed] = useState(0)

    // Send the video's current timestamp to the store
    useEffect(() => {
        if (isRequestingTimestamp && timeElapsed !== 0) {
            const formattedTimestamp = formatTimestamp(timeElapsed)
            dispatch(fulfillTimestampRequestAction(formattedTimestamp))
        }
    }, [isRequestingTimestamp])

    const retrieveVideo = (event: MouseEvent, url: string): void => {
        event.preventDefault()

        if (url === '') return

        if (!isValidUrl(url)) {
            dispatch(showSnackbarAction('Invalid video url. Only YouTube links are allowed.', 'error'))
            setRawUrlInput('')
            return
        }

        // Set the video in the player and send the url to the store
        setVideoSrc(getYTVideoId(rawUrlInput))
        setTimeElapsed(0)
        dispatch(createVideoUrlAction(rawUrlInput))
    }

    return (
        <div className={classes.root}>
            <Card className={classes.toolbar}>
                <CardContent className={classes.toolbarContent}>
                    <InputBase
                        className={classes.urlInput}
                        onChange={event => setRawUrlInput(event.target.value)}
                        required
                        placeholder={'Enter video url...'}
                        value={rawUrlInput}
                    />
                    <Tooltip title='Get video'>
                        <GetAppIcon
                            onClick={(event: any) => retrieveVideo(event, rawUrlInput)}
                            className={classes.getIcon}
                        />
                    </Tooltip>
                </CardContent>
            </Card>
            {
                videoSrc !== '' &&
                <YouTube
                    videoId={videoSrc}
                    opts={{
                        width: '100%',
                        height: '250px'
                    }}
                    onStateChange={(event) => setTimeElapsed(event.target.getCurrentTime())}
                />
            }
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },

    // Toolbar
    toolbar: {
        width: '100%',
        backgroundColor: 'white',
    },
    toolbarContent: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0.5rem 1.5rem',
        "&:last-child": {
            paddingBottom: '0.5rem'
        }
    },

    // Url
    urlInput: {
        width: '100%',
    },
    getIcon: {
        marginTop: '0.2rem',
        padding: '0.1rem 0.5rem',
        cursor: 'pointer',
        color: theme.palette.primary.dark
    }
}))

