import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

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

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Título"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="Qué pasó hoy"
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
