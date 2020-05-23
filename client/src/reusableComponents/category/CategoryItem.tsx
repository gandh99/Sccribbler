import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'

export default function CategoryItem(props: { text: string, deletable: boolean }) {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <div className={classes.root}>
            <div className={classes.content}>
                <span>{props.text}</span>
                {props.deletable && <DeleteIcon className={classes.deleteIcon} />}
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '0.5rem 0',
        cursor: 'pointer',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: theme.palette.grey[100]
        }
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        padding: '1rem 1.5rem'
    },
    deleteIcon: {
        color: theme.palette.primary.dark,
        marginLeft: 'auto',
        zIndex: 3
    }
}))