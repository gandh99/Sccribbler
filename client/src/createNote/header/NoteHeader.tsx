import React from 'react'
import { Card, CardContent, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SaveButton from './SaveButton'
import Title from './Title'
import CategoryButton from './CategoryButton'

export default function NoteHeader() {
    const classes = useStyles()

    return (
        <Card variant='elevation'>
            <CardContent className={classes.cardContent}>
                <Title />
                <Divider className={classes.divider} orientation="vertical" flexItem />
                <CategoryButton />
                <SaveButton />
            </CardContent>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'row',
        padding: '0.5rem 0.5rem 0.5rem 1.5rem',
        "&:last-child": {
            paddingBottom: '0.5rem'
        }
    },
    divider: {
        margin: '0 1rem'
    }
}))