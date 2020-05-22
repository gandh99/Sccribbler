import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, InputBase, Divider } from '@material-ui/core'
import CategoryItem from './CategoryItem'
import CategoryInput from './CategoryInput'

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
                <CategoryItem text={'All'} deletable={false} />
                <Divider variant='middle' />
                <div className={classes.addCategory}>
                    <CategoryInput />
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