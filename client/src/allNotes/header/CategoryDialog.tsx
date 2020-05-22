import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, InputBase } from '@material-ui/core'
import CategoryItem from './CategoryItem'
import EditIcon from '@material-ui/icons/Edit'

export default function CategoryButton(props: { open: boolean, setOpen: Function }) {
    const classes = useStyles()
    const dispatch = useDispatch()

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
            <DialogTitle id="form-dialog-title">View by Category</DialogTitle>
            <DialogContent className={classes.content}>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <div className={classes.addCategory}>
                    <InputBase
                        className={classes.input}
                        placeholder={'Add New Category'}
                    />
                    <EditIcon className={classes.editIcon} />
                </div>
            </DialogContent>
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
        display: 'flex',
        flexDirection: 'row',
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