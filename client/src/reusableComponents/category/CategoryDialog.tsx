import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, Divider } from '@material-ui/core'
import CategoryItem from './CategoryItem'
import CategoryInput from './CategoryInput'
import { OnCategoryItemSelected, Category } from './Interface'

export default function CategoryDialog(props: {
    open: boolean,
    setOpen: Function,
    onCategoryItemSelected: OnCategoryItemSelected
}) {
    const classes = useStyles()
    const allCategories = useSelector((state: any) => state.category.allCategories)
    const allCategoriesOption: Category = { categoryId: -1, name: 'All', ownerId: -1 }

    const handleClose = () => {
        props.setOpen(false)
    }

    return (
        <Dialog
            className={classes.root}
            fullWidth={true}
            open={props.open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Select Category</DialogTitle>
            <DialogContent className={classes.content}>
                <CategoryItem
                    category={allCategoriesOption}
                    onCategoryItemSelected={props.onCategoryItemSelected}
                    deletable={false}
                />
                {allCategories.map((category: any, index: number) =>
                    <CategoryItem
                        key={index}
                        category={category}
                        onCategoryItemSelected={props.onCategoryItemSelected}
                        deletable={true}
                    />
                )}
            </DialogContent>
            <Divider variant='middle' />
            <div className={classes.addCategory}>
                <CategoryInput />
            </div>
        </Dialog>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    content: {
        padding: '0rem'
    },
    addCategory: {
        padding: '1rem 1.5rem',
    },
    input: {
        width: '100%',
    },
    editIcon: {
        marginLeft: 'auto',
        cursor: 'pointer',
        color: theme.palette.primary.dark
    }
}))