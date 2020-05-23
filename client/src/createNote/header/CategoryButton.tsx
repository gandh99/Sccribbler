import React, { useState } from 'react'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CategoryIcon from '@material-ui/icons/Category'
import CategoryDialog from '../../allNotes/header/CategoryDialog'

export default function CategoryButton() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <Tooltip title={'Select a Category'}>
                <CategoryIcon
                    onClick={handleClickOpen}
                    className={classes.icon}
                />
            </Tooltip>
            <CategoryDialog open={open} setOpen={setOpen} />
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