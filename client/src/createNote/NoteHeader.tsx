import React, { useState } from 'react'
import { Card, CardContent, InputBase, Divider, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SaveButton from './SaveButton'
import CreateIcon from '@material-ui/icons/Create'

export default function NoteHeader() {
    const classes = useStyles()
    const [title, setTitle] = useState('')

    return (
        <Card variant='elevation'>
            <CardContent className={classes.cardContent}>
                <InputBase
                    className={classes.textInput}
                    onChange={event => setTitle(event.target.value)}
                    required
                    placeholder={'Add a Title...'}
                    value={title}
                />
                <Tooltip title={'Submit Title'}>
                    <CreateIcon
                        className={classes.createIcon}
                    />
                </Tooltip>
                <Divider className={classes.divider} orientation="vertical" flexItem />
                <SaveButton />
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0.5rem 1.5rem',
        "&:last-child": {
            paddingBottom: '0.5rem'
        }
    },
    textInput: {
        width: '100%',
    },
    createIcon: {
        marginLeft: '1rem',
        padding: '0 0.8rem',
        color: theme.palette.primary.dark,
        cursor: 'pointer'
    },
    divider: {
        margin: '0 1rem'
    }
}))