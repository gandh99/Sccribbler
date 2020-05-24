import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { INote } from '../../interfaces/notes'
import { Card, CardContent, Divider, Grid } from '@material-ui/core'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default function NoteCard(props: { note: INote }) {
    const classes = useStyles()
    const { title, category, updatedAt, allScribbles } = props.note

    return (
        <Grid item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.root}>
                <CardContent className={classes.cardContent}>
                    <div className={classes.header}>
                        <Header title={title} />
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.body}>
                        <Body allScribbles={allScribbles} />
                    </div>
                    <div className={classes.footer}>
                        <Footer
                            timestamp={updatedAt}
                            category={category}
                        />
                    </div>
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
    header: {
    },
    divider: {
        margin: '0.5rem 0'
    },
    body: {
    },
    footer: {
    },
}))