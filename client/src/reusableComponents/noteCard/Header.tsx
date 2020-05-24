import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Chip } from '@material-ui/core'
import { ICategory } from '../../interfaces/category'

export default function Header(props: { title: string, category: ICategory | undefined }) {
    const classes = useStyles()
    const { title, category } = props

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant="h5" component="h2">
                {title}
            </Typography>
            {category?.categoryId &&
                <Chip
                    className={classes.chip}
                    label={category.name}
                    size='small'
                />
            }
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    chip: {
        marginLeft: 'auto',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 14,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark
        }
    },
}))