import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch()

    const [ formValues, handleInoutChange ] = useForm({
        email: 'saullainez@hotmail.es',
        password: '123456'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch( login(12345, 'Saul') );
    }

    return (
        <>
            <h3 className="auth__title mb-5">Iniciar sesión</h3>
            <form onSubmit={ handleLogin }>
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
                <button
                    className="btn btn-primary btn-block"
                    type="submit"

                >
                    Ingresar
                </button>

                <div className="auth__social-networks">
                    <p className="auth__text-alter-login">O inicia sesión con</p>
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Google</b>
                        </p>
                    </div>
                </div>
                <div className="text-center">
                    <Link 
                        to="/auth/register"
                        className="link"
                    >
                        Registrarse
                    </Link>
                </div>

            </form>
        </>
    )
}
