import React, { useEffect } from 'react'
import CreateNote from '../createNote/CreateNote'
import { useDispatch } from 'react-redux'
import { clearNoteDataAction } from '../redux/actions/saveNoteActions'

export default function EditNote() {
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(clearNoteDataAction())
        }
    }, [])

    return (
        <div>
            <CreateNote />
        </div>
    )
}
