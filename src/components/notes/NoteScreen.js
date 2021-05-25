import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note } = useSelector( state => state.notes );
    const [ formValues, handleInputChange, reset ] = useForm(note);
    const { body, title } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {

        if(note.id !== activeId.current){
            reset( note );
            activeId.current = note.id;
        }

    }, [note, reset])

    useEffect(() => {
        
        dispatch( activeNote( formValues.id, {...formValues} ) );

    }, [formValues, dispatch])

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    name="title"
                    placeholder="Título"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="Qué pasó hoy"
                    name="body"
                    className="notes__text-area"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {
                    (note.url)
                    &&
                    (<div className="notes__image">
                        <img
                            src="https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/06/21/15926966530661.jpg"
                            alt="Imagen"
                        />
                    </div>)
                }
            </div>
        </div>
    )
}
