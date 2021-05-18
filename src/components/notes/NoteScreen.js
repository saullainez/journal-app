import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Título"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="Qué pasó hoy"
                    className="notes__text-area"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2020/06/21/15926966530661.jpg"
                        alt="Imagen"
                    />
                </div>
            </div>
        </div>
    )
}
