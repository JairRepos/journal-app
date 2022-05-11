import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';

import { removeError, setError } from '../../actions/ui';
import { registerWithEmailPasswordName } from '../../actions/auth';



export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        name: 'Jair',
        email: 'jaircael7x@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(registerWithEmailPasswordName(email, password, name));
            console.log('Formulario correcto');
        }
    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('Name is Required'))
            /* console.log('Name is required'); */
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'))
            /* console.log('Email is not valid'); */
            return false;
        } else if (password !== password2 || password.length < 5) {
            dispatch(setError('Password should be at least 5 characters and match each other'))
            /* console.log('Password should be at least 5 characters and match each other'); */
            return false;
        }

        dispatch(removeError());

        return true;

    }



    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={handleRegister}>

                {msgError &&
                    (<div className="auth__alert-error">
                        {msgError}
                    </div>)
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className="auth__input"
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>



                <Link
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}
