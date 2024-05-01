import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom';
import * as signupService from '../service/SignupService';
import InputMask from 'react-input-mask';

const Signup = () => {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const changeFirstname = (firstname) => {
        setFirstname(firstname.target.value);
    }
    const changeEmail = (email) => {
        setEmail(email.target.value);
    }
    const changeMobile = (mobile) => {
        if (validate(mobile)) {
            setMobile(mobile.target.value);
        }
    }
    const changePassword = (password) => {
        setPassword(password.target.value);
    }

    /*     const signUpUser = async () => {
            let data = { firstname, email, mobile, password };
            const res = await signupService.signupUser(data);
            const datos = await res.json();
            console.log(datos);
            navigate('/login');
        } */

    const signUpUser = async () => {
        try {
            let data = { firstname, email, mobile, password };
            const res = await signupService.signupUser(data);
            if (!res.ok) {
                throw new Error('Failed to create user');
            } else {
                setError('Account create');
                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    }

    const validate = (tel) => {
        let inputTel = tel.target.value;
        if (inputTel.length < 10) {
            tel.target.style = 'border: 1px solid red';
            return false;
        } else {
            tel.target.style = 'border: none';
            return true;
        }
    }


    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title='Sign Up' />

            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center'>Sign Up</h3>
                                {error && <p className="Link text-center mt-3">{error}</p>}
                                <form onSubmit={signUpUser} className='mt-3 d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            type="text"
                                            required
                                            name='firstname'
                                            placeholder='First Name'
                                            className="form-control"
                                            onChange={changeFirstname} />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            required
                                            name='email'
                                            placeholder='Email'
                                            className="form-control"
                                            onChange={changeEmail} />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            minLength='5'
                                            required
                                            name='mobile'
                                            placeholder='Mobile Number'
                                            className="form-control"
                                            onChange={changeMobile} />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            type="password"
                                            required
                                            name='password'
                                            placeholder='Password'
                                            className="form-control"
                                            onChange={changePassword} />
                                    </div>
                                    <div>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <button type='submit' className="button border-0">Sing Up</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;  