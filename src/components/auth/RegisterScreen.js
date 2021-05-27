import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInoutChange ] = useForm({
        name: 'Saul',
        email: 'saullainez@hotmail.es',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2} = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()){
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        }
    }

    const isFormValid = () => {
        if(name.trim().length === 0){
            dispatch(setError("El nombre es requerido"));
            return false;
        }else if (!validator.isEmail(email)){
            dispatch(setError("El correo no es válido"));
            return false;
        }else if( password !== password2 || password.length < 5){
            dispatch(setError("Las contraseñas deben coincidir y deben tener al menos cinco caracteres"));
            return false;
        }

        dispatch(removeError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title mb-5">Registrarse</h3>
            <form 
                onSubmit={ handleRegister }
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
