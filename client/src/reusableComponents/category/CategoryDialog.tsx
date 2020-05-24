import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, Divider } from '@material-ui/core'
import CategoryItem from './CategoryItem'
import CategoryInput from './CategoryInput'
import { OnCategoryItemSelected, ICategory } from '../../interfaces/category'
import { allOption } from '../../redux/reducers/categoryReducer'

type Props = {
    open: boolean,
    setOpen: Function,
    onCategoryItemSelected: OnCategoryItemSelected
}

export default function CategoryDialog({ open, setOpen, onCategoryItemSelected}: Props) {
    const classes = useStyles()
    const allCategories = useSelector((state: any) => state.category.allCategories)
    const allCategoriesOption: ICategory = allOption

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog
            className={classes.root}
            fullWidth={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Select Category</DialogTitle>
            <DialogContent className={classes.content}>
                <CategoryItem
                    category={allCategoriesOption}
                    onCategoryItemSelected={onCategoryItemSelected}
                    deletable={false}
                />
                {allCategories.map((category: any, index: number) =>
                    <CategoryItem
                        key={index}
                        category={category}
                        onCategoryItemSelected={onCategoryItemSelected}
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