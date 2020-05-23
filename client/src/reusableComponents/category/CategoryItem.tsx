import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { OnCategoryItemSelected, Category } from './Interface'

export default function CategoryItem(props: {
    category: Category,
    onCategoryItemSelected: OnCategoryItemSelected,
    deletable: boolean
}) {
    const classes = useStyles()
    const { category, onCategoryItemSelected, deletable } = props

    return (
        <div className={classes.root}>
            <div
                onClick={() => onCategoryItemSelected.onSelected(category)}
                className={classes.content}>
                <span>{category.name}</span>
                {deletable && <DeleteIcon className={classes.deleteIcon} />}
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