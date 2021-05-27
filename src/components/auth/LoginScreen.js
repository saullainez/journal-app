import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword, startGoogleLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { removeError, setError } from '../../actions/ui';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector( state => state.ui );

    const [ formValues, handleInoutChange ] = useForm({
        email: 'saullainez@hotmail.es',
        password: '123456'
    });

    const {email, password} = formValues;

    const handleLogin = (e) => {

        e.preventDefault();
        if( isFormValid() ){
            dispatch( startLoginEmailPassword(email, password) );
        }
        
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    const isFormValid = () => {
        if (!validator.isEmail(email)){
            dispatch(setError("El correo no es válido"));
            return false;
        }else if( password.length < 5){
            dispatch(setError("La contraseña debe tener al menos cinco caracteres"));
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title mb-5">Iniciar sesión</h3>
            <form 
                onSubmit={ handleLogin }
                className="animate__animated animate__fadeIn animate__faster"
            >
                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }
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
                    disabled={loading}

                >
                    Ingresar
                </button>

                <div className="auth__social-networks">
                    <p className="auth__text-alter-login">O inicia sesión con</p>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
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
