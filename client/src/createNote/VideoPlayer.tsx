import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CardContent, Card, InputBase } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import { isValidUrl, getYTVideoId } from '../utils/videoPlayer.tsx'
import { useDispatch } from 'react-redux'
import { showSnackbarAction } from '../redux/actions/globalNotificationActions'
import YouTube from 'react-youtube'

export default function VideoPlayer() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [urlInput, setUrlInput] = useState('')
    const [videoSrc, setVideoSrc] = useState('')

    const retrieveVideo = (event: MouseEvent, url: string): void => {
        event.preventDefault()

        if (url === '') return

        if (!isValidUrl(url)) {
            dispatch(showSnackbarAction('Invalid video url. Only YouTube links are allowed.', 'error'))
            setUrlInput('')
            return
        }

        setVideoSrc(getYTVideoId(urlInput))
    }

    return (
        <div className={classes.root}>
            <Card className={classes.toolbar}>
                <CardContent className={classes.toolbarContent}>
                    <InputBase
                        className={classes.urlInput}
                        onChange={event => setUrlInput(event.target.value)}
                        required
                        placeholder={'Enter video url...'}
                        value={urlInput}
                    />
                    <GetAppIcon
                        onClick={(event: any) => retrieveVideo(event, urlInput)}
                        className={classes.getIcon}
                    />
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
                    onStateChange={(event) => console.log(event.target.getCurrentTime())}
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

