import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import { OnCategoryItemSelected, ICategory } from '../../interfaces/category'
import { useSelector } from 'react-redux'
import clsx from 'clsx'

export default function CategoryItem(props: {
    category: ICategory,
    onCategoryItemSelected: OnCategoryItemSelected,
    deletable: boolean
}) {
    const classes = useStyles()
    const { category, onCategoryItemSelected, deletable } = props
    const activeCategory = useSelector((state: any) => state.category.activeCategory)

    const isActiveCategory = (thisCategory: ICategory, activeCategory: ICategory): boolean => {
        return activeCategory && thisCategory.categoryId === activeCategory.categoryId
    }

    return (
        <div className={classes.root}>
            <div
                onClick={() => onCategoryItemSelected.onSelected(category)}
                className={classes.content}>
                <span className={clsx(
                    { [classes.activeName]: isActiveCategory(category, activeCategory) },
                    { [classes.inactiveName]: !isActiveCategory(category, activeCategory) },
                )}>
                    {category.name}
                </span>
                {deletable && <DeleteIcon className={classes.deleteIcon} />}
            </div>
        </div >
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
    activeName: {
        color: theme.palette.primary.contrastText
    },
    inactiveName: {
        color: theme.palette.grey[400]
    },
    deleteIcon: {
        color: theme.palette.primary.dark,
        marginLeft: 'auto',
        zIndex: 3
    }
}))