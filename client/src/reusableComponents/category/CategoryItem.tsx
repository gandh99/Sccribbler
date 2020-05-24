import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import { OnCategoryItemSelected, ICategory } from '../../interfaces/category'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCategoryAction } from '../../redux/actions/categoryActions'
import { showSnackbarAction } from '../../redux/actions/globalDisplayActions'
import { Tooltip } from '@material-ui/core'
import { getAllNotesAction } from '../../redux/actions/getOrDeleteNoteActions'

export default function CategoryItem(props: {
    category: ICategory,
    onCategoryItemSelected: OnCategoryItemSelected,
    deletable: boolean
}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const { category, onCategoryItemSelected, deletable } = props
    const activeCategory = useSelector((state: any) => state.category.activeCategory)

    const isActiveCategory = (thisCategory: ICategory, activeCategory: ICategory): boolean => {
        return activeCategory && thisCategory.categoryId === activeCategory.categoryId
    }

    const onDelete = (event: MouseEvent, category: ICategory): void => {
        dispatch(deleteCategoryAction(
            category,
            () => dispatch(getAllNotesAction(
                () => {},
                () => {}
            )),
            () => dispatch(showSnackbarAction('Unable to delete category.', 'error'))
        ))
    }

    return (
        <div className={classes.root}>
            <div
                className={classes.content}>
                <span
                    onClick={() => onCategoryItemSelected.onSelected(category)}
                    className={clsx(
                        classes.name,
                        { [classes.activeName]: isActiveCategory(category, activeCategory) },
                        { [classes.inactiveName]: !isActiveCategory(category, activeCategory) },
                    )}>
                    {category.name}
                </span>
                {deletable &&
                    <Tooltip title='Delete Category'>
                        <DeleteIcon onClick={(e: any) => onDelete(e, category)} className={classes.deleteIcon} />
                    </Tooltip>
                }
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
    name: {
        width: '100%',
        height: '100%',
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