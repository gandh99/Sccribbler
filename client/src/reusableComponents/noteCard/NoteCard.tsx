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
                <CardContent>
                    <div className={classes.header}>
                        <Header 
                            title={title}
                            category={category}
                        />
                    </div>
                    <Divider className={classes.divider} />
                    <div className={classes.scribblesArea}>
                        <Body allScribbles={allScribbles} />
                    </div>
                    <div className={classes.footer}>
                        <Footer timestamp={updatedAt} />
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '1rem',
        cursor: 'pointer'
    },

    // Header
    header: {
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
    divider: {
        margin: '0.5rem 0'
    },

    // Body
    scribblesArea: {
        textAlign: 'left',
        color: theme.palette.grey[600],
        fontSize: 14
    },

    // Footer
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: 12,
        fontStyle: 'italic'
    },
}))