import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import YouTube from 'react-youtube'
import { respondWithTimesElapsedAction, resetTimeElapsedAction, setDurationAction, resetDurationAction, resetSeekTimeAction } from '../../redux/actions/videoPlayerActions'
import UrlInput from './UrlInput'
import { getYTVideoId } from '../../utils/videoPlayer.tsx'

export default function VideoPlayer() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [videoSrc, setVideoSrc] = useState('')
    const [videoPlayer, setVideoPlayer] = useState<any>(null)
    
    // Get the video url from the store
    const videoUrl = useSelector((state: any) => state.saveNote.videoUrl)
    useEffect(() => {
        try {
            setVideoSrc(getYTVideoId(videoUrl))
        } catch (error) {     
            setVideoSrc('')     
        }
    }, [videoUrl])

    // Send the video's current time elapsed to the store
    const isRequestingTimeElapsed = useSelector((state: any) => state.videoPlayer.isRequestingTimeElapsed)    
    const [timeElapsed, setTimeElapsed] = useState(0)
    useEffect(() => {
        if (isRequestingTimeElapsed && timeElapsed !== 0) {
            dispatch(respondWithTimesElapsedAction(timeElapsed))
        }
        return () => {
            dispatch(resetTimeElapsedAction())
        }
    }, [isRequestingTimeElapsed])

    // Send the video's duration to the store
    const [duration, setDuration] = useState(0)
    useEffect(() => {
        dispatch(setDurationAction(duration))
        return () => {
            dispatch(resetDurationAction())
        }
    }, [duration])

    // Seek the video player to the stipulated time and then reset the seek time in the store
    const seekTime = useSelector((state: any) => state.videoPlayer.seekTime)    
    useEffect(() => {
        if (seekTime && seekTime >= 0) {
            videoPlayer!.seekTo(seekTime)
            dispatch(resetSeekTimeAction())
        }
        return () => {
            dispatch(resetSeekTimeAction())
        }
    }, [seekTime])

    return (
        <div className={classes.root}>
            <UrlInput />
            {videoSrc !== '' &&
                <YouTube
                    videoId={videoSrc}
                    opts={{
                        width: '100%',
                        height: '250px'
                    }}
                    onReady={(event) => {
                        setVideoPlayer(event.target)
                        setDuration(event.target.getDuration())
                    }}
                    onStateChange={(event) => {
                        setTimeElapsed(Math.round(event.target.getCurrentTime()))
                        setDuration(event.target.getDuration())
                    }}
                />}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
    },
}))

