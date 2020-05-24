import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { INote } from '../../interfaces/notes'
import { Card, CardContent, Divider, Grid } from '@material-ui/core'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function NoteCard(props: { note: INote }) {
    const classes = useStyles()
    const { category, updatedAt, allScribbles } = props.note

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <Header note={props.note} />
                    <Divider className={classes.divider} />
                    <Body allScribbles={allScribbles} />
                    <Footer
                        timestamp={updatedAt}
                        category={category}
                    />
                </CardContent>
            </Card>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem',
        cursor: 'pointer',
    },
    cardContent: {
        '&:last-child': {
            paddingBottom: '0.5rem'
        }
    },
    divider: {
        margin: '0.5rem 0'
    },
}))