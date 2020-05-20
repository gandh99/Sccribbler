import React, { useState } from 'react'
import { Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CategoryIcon from '@material-ui/icons/Category'

export default function SelectCategoryButton() {
    const classes = useStyles()

    return (
        <Tooltip title={'Select a Category'}>
            <CategoryIcon
                className={classes.icon}
            />
        </Tooltip>
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