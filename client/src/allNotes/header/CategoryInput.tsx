import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { InputBase } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

export default function CategoryButton() {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <div className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder={'Add New Category'}
            />
            <EditIcon className={classes.editIcon} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: '100%',
    },
    editIcon: {
        marginLeft: 'auto',
        cursor: 'pointer',
        color: theme.palette.primary.dark,
        zIndex: 3
    }
}))