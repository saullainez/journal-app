import {types} from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { finishLoading, startLoading } from './ui';

import Swal from 'sweetalert2';

export const startLoginEmailPassword = (email, password) => {
    let msjErr = "";
    return (dispatch) => {
        dispatch(startLoading());
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());
            })
            .catch(e => {
                msjErr = (e.code === "auth/user-not-found" || e.code === "auth/wrong-password") ? "Usuario o contraseña incorrectos" : "Ocurrió un error";
                console.log(e);
                dispatch(finishLoading());
                Swal.fire('Error', msjErr, 'error');
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    let msjErr = "";
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async ({user}) => {
                await user.updateProfile({ displayName: name });
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
            .catch(e => {
                msjErr = e.code === "auth/email-already-in-use"  ? "El correo ya está en uso por otra cuenta" : "Ocurrió un error";
                console.log(e);
                Swal.fire('Error', msjErr, 'error');
            });
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                dispatch(
                    login(user.uid, user.displayName)
                );
            } );
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return  async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
    }
}

export const logout = () => ({
    type: types.logout
})