import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { InputBase } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import { createCategoryAction } from '../../redux/actions/categoryActions'
import { showSnackbarAction } from '../../redux/actions/globalDisplayActions'

export default function CategoryButton() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [text, setText] = useState('')

    const onSubmit = (event: MouseEvent, text: string): void => {
        event.preventDefault()

        if (text.length > 10) {
            dispatch(showSnackbarAction('Category name must not exceed 10 characters.', 'error'))
            return
        }

        if (text !== '') {
            dispatch(createCategoryAction(
                text,
                () => {
                    dispatch(showSnackbarAction('Success!', 'success'))
                    setText('')
                },
                () => dispatch(showSnackbarAction('Unable to create category. Please try again later.', 'error')),
            ))
        }
    }

    return (
        <div className={classes.root}>
            <InputBase
                className={classes.input}
                value={text}
                onChange={(event: any) => setText(event.target.value)}
                placeholder={'Add New Category'}
            />
            <EditIcon onClick={(event: any) => onSubmit(event, text)} className={classes.editIcon} />
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    input: {
        width: '100%',
    },
    editIcon: {
        marginLeft: 'auto',
        cursor: 'pointer',
        color: theme.palette.primary.dark,
        zIndex: 3
    }
}))