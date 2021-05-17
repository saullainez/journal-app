import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title mb-5">Registrarse</h3>
            <form>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="password2"
                    className="auth__input"
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"

                >
                    Registrarse
                </button>

                <div className="text-center">
                    <Link 
                        to="/auth/login"
                        className="link"
                    >
                        Iniciar sesión
                    </Link>
                </div>

            </form>
        </>
    )
}
