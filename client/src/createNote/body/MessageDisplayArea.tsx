import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { IMessage } from '../../utils/note'
import Message from './Message'
import { Divider } from '@material-ui/core'

export default function MessageDisplayArea() {
    const classes = useStyles()
    const [allMessages, setAllMessages] = useState<IMessage[]>([])
    const allMessagesStore: IMessage[] = useSelector((state: any) => state.createNote.allMessages)

    useEffect(() => {
        setAllMessages(allMessagesStore)
    }, [allMessagesStore])

    // const allMessages = [
    //     { uuid: '1', timestamp: '0:00:10', text: 'helloooooooloasldoalsodlasodlsaodlaosdoasldoalsdoasldoasld' },
    //     { uuid: '1', timestamp: '0:00:10', text: 'helloooooooloasldoa lsodlasodlsaodlaos doasldoalsdoaasdi jsafjsojsao1111 ifjoasfsldoasld' },
    //     { uuid: '1', timestamp: '0:00:10', text: 'helloooooooksdifjisdjfiasjodjas ojdoasjdoasjidsaojdloasld  oalsodlasodlsaodlaosdoas ldoalsdoasldoasld' },
    // ]

    return (
        <div className={classes.root}>
            {allMessages.map((message: IMessage, index: number) => {
                return <>
                    <Message message={message} />
                    {index < allMessages.length - 1 && <Divider variant="middle" />}
                </>
            })}
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
}))