import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, id } = formValues;

    const activeId = useRef(note.id);
    const activeUrl = useRef(note.url);

    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id
        }
        if (note.url !== activeUrl.current) {
            reset(note);
            activeUrl.current = note.url;
        }

    }, [note, reset])

    useEffect(() => {

        dispatch(activeNote(formValues.id, { ...formValues }))

    }, [formValues, dispatch]);

    const handleDelete = () => {

        dispatch(startDeleting(id));
    }

    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    name="title"
                    autoComplete="off"
                    onChange={handleInputChange}
                    value={title}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    onChange={handleInputChange}
                    value={body}
                ></textarea>

                {
                    note.url &&
                    (<div className="notes__image">
                        <img
                            src={note.url}
                            alt="imagen"
                        />
                    </div>)

                }


            </div>

            <button onClick={handleDelete} className="btn btn-danger">Delete</button>


        </div>
    )
}
