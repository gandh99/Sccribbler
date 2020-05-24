import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CardContent, Card, InputBase } from '@material-ui/core'
import GetAppIcon from '@material-ui/icons/GetApp'
import { isValidUrl } from '../../utils/videoPlayer.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { showSnackbarAction } from '../../redux/actions/globalDisplayActions'
import Tooltip from '@material-ui/core/Tooltip'
import { saveVideoUrlAction } from '../../redux/actions/saveNoteActions'

export default function UrlInput() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const videoUrl = useSelector((state: any) => state.saveNote.videoUrl)
    const [url, setUrl] = useState('')

    useEffect(() => {
        setUrl(videoUrl)
    }, [videoUrl])

    const onClick = (event: MouseEvent, url: string): void => {
        event.preventDefault()

        if (url === '') return
        if (!isValidUrl(url)) {
            dispatch(showSnackbarAction('Invalid video url. Only YouTube links are allowed.', 'error'))
            setUrl('')
            return
        }

        dispatch(saveVideoUrlAction(url))
    }

    return (
        <Card className={classes.toolbar}>
            <CardContent className={classes.toolbarContent}>
                <InputBase
                    className={classes.urlInput}
                    onChange={event => setUrl(event.target.value)}
                    required
                    placeholder={'Enter video url...'}
                    value={url}
                />
                <Tooltip title='Get video'>
                    <GetAppIcon
                        onClick={(event: any) => onClick(event, url)}
                        className={classes.getIcon}
                    />
                </Tooltip>
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
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

