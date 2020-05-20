import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { IScribble } from '../../interfaces/notes'
import Scribble from './Scribble'
import { Divider } from '@material-ui/core'

export default function ScribbleDisplayArea() {
    const classes = useStyles()
    const [allScribbles, setAllScribbles] = useState<IScribble[]>([])
    const allScribblesStore: IScribble[] = useSelector((state: any) => state.createNote.allScribbles)

    useEffect(() => {
        setAllScribbles(allScribblesStore)
    }, [allScribblesStore])

    // const allScribbles = [
    //     { uuid: '1', timestamp: '0:00:10', text: 'helloooooooloasldoalsodlasodlsaodlaosdoasldoalsdoasldoasld' },
    //     { uuid: '1', timestamp: '0:00:10', text: 'helloooooooloasldoa lsodlasodlsaodlaos doasldoalsdoaasdi jsafjsojsao1111 ifjoasfsldoasld' },
    //     { uuid: '1', timestamp: '0:00:10', text: 'helloooooooksdifjisdjfiasjodjas ojdoasjdoasjidsaojdloasld  oalsodlasodlsaodlaosdoas ldoalsdoasldoasld' },
    // ]

    return (
        <div className={classes.root}>
            {allScribbles.map((scribble: IScribble, index: number) => {
                return <>
                    <Scribble scribble={scribble} />
                    {index < allScribbles.length - 1 && <Divider variant="middle" />}
                </>
            })}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))