import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { IScribble } from '../../interfaces/notes'
import { formatScribble } from '../../utils/allNotes'

type Props = {
    allScribbles: IScribble[]
}

export default function Body({ allScribbles }: Props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            {allScribbles[0] && <p>{formatScribble(allScribbles[0].text)}</p>}
            {allScribbles[1] && <p>{formatScribble(allScribbles[1].text)}</p>}
            {allScribbles[2] && <p>{formatScribble(allScribbles[2].text)}</p>}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'left',
        color: theme.palette.grey[600],
        fontSize: 14
    },
}))