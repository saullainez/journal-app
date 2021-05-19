import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [ formValues, handleInoutChange ] = useForm({
        name: 'Saul',
        email: 'saullainez@hotmail.es',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <h3 className="auth__title mb-5">Registrarse</h3>
            <form onSubmit={ handleRegister }> 
                <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInoutChange}
                />
                <input
                    type="text"
                    placeholder="Correo electrónico"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInoutChange}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInoutChange}
                />
                <input
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInoutChange}
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
