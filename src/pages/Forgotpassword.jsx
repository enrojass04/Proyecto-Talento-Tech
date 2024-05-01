import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  return (
    <>
        <Meta title={"Forgot Password"}/>
        <BreadCrumb title='Forgot Password'/>        

        <div className="login-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Reset Your password</h3>
                            <p className="text-center mt-2 mb-1">We will send you an email to reset your password</p>
                            <form action="" className='mt-3 d-flex flex-column gap-15'>
                                <div className='mt-1'>
                                    <input 
                                    type="text" 
                                    name='email'
                                    placeholder='email'
                                    className="form-control" />
                                </div>
                                <div>
                                    <div className="mt-3 d-flex  flex-column justify-content-center gap-15 align-items-center">
                                        <button className="button border-0" type='submit'>Submit</button>
                                        <Link className='Link' to='/login'>Cancel</Link>
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

export default Forgotpassword