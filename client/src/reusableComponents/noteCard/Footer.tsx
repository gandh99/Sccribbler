import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { formatTimestamp } from '../../utils/allNotes'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { Tooltip, Chip } from '@material-ui/core'
import { ICategory } from '../../interfaces/category'

type Props = {
    timestamp: Date | undefined, 
    category: ICategory | undefined
}

export default function Footer({ timestamp, category }: Props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {category?.categoryId &&
                <Chip
                    className={classes.chip}
                    label={category.name}
                    size='small'
                />
            }
            <AccessTimeIcon className={classes.accessTimeIcon} />
            <Tooltip title='Last Updated Time'>
                <p className={classes.timestamp}>{formatTimestamp(timestamp)}</p>
            </Tooltip>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        zIndex: 3,
    },    
    chip: {
        marginTop: '0.5rem',
        marginRight: 'auto',
        marginLeft: 0,
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 14,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    },
    accessTimeIcon: {
        width: '1rem',
        margin: '0.5rem',
        color: theme.palette.grey[900],
    },
    timestamp: {
        fontSize: 12,
        fontStyle: 'italic',
    }
}))