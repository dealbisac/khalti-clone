import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://blog.khalti.com/wp-content/uploads/2019/09/khalti-logo.png"
                    alt="Logo"
                />
                <img
                    src="https://www.gadgetbytenepal.com/wp-content/uploads/2017/01/khalti-696x339.jpg"
                    alt="Signin"
                />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>

        </div>
    );
}

export default Login;