import React from 'react'
import CreateNote from '../createNote/CreateNote'

export default function EditNote() {
    return (
        <div>
            <CreateNote resetActiveCategory={false} />
        </div>
    )
}
