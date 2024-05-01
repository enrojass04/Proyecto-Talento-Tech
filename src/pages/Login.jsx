import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link, useNavigate } from 'react-router-dom';
import * as loginService from '../service/LoginService';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');

    const changeEmail = (email) => {
        setEmail(email.target.value);
    }
    const changePassword = (password) => {
        setPassword(password.target.value);
    }

    /*     const loginUser = async () => {
            let data = {email, password};
            const resp = await loginService.loginUser(data);
            const datos = await resp.json();
            
            localStorage.setItem('dataUserLogin', JSON.stringify(datos));
            navigate('/');
            window.location.reload();
            // window.location.reload(); Usar cuando no se redirija a otra página
        }
     */
    const loginUser = async () => {
        try {
            let data = { email, password };
            const resp = await loginService.loginUser(data);
            const datos = await resp.json();
            localStorage.setItem('dataUserLogin', JSON.stringify(datos));
            navigate('/');
            window.location.reload();
        } catch (error) {
            setError(error.message);
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    }


    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title='Login' />

            <div className="login-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center'>Login</h3>
                                <form className='mt-3 d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            type="text"
                                            name='email'
                                            placeholder='email'
                                            className="form-control"
                                            onChange={changeEmail} />
                                    </div>
                                    <div className='mt-1'>
                                        <input
                                            type="password"
                                            name='password'
                                            placeholder='password'
                                            className="form-control"
                                            onChange={changePassword} />
                                    </div>
                                </form>
                                <div>
                                    <Link className='Link' to='/forgot-password'>Forgot your password?</Link>
                                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                        <button onClick={loginUser} className="button border-0">Login</button>
                                        <Link to='/register' className="button signup">SingUp</Link>
                                    </div>
                                </div>
                                {error && <p className="Link text-center mt-3">{error}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
