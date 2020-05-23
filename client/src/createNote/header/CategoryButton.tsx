import React, { useState } from 'react'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CategoryIcon from '@material-ui/icons/Category'
import CategoryDialog from '../../reusableComponents/category/CategoryDialog'
import { OnCategoryItemSelected, Category } from '../../reusableComponents/category/Interface'
import { useDispatch } from 'react-redux'
import { selectCategoryAction } from '../../redux/actions/categoryActions'

export default function CategoryButton() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const onCategoryItemSelected: OnCategoryItemSelected = {
        onSelected: (category: Category) => {
            dispatch(selectCategoryAction(category))
        }
    }

    return (
        <>
            <Tooltip title={'Select a Category'}>
                <CategoryIcon
                    onClick={handleClickOpen}
                    className={classes.icon}
                />
            </Tooltip>
            <CategoryDialog
                open={open}
                setOpen={setOpen}
                onCategoryItemSelected={onCategoryItemSelected}
            />
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    icon: {
        color: theme.palette.secondary.dark,
        cursor: 'pointer',
        padding: '0 0.5rem'
    },
}))