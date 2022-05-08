import React from 'react';
import google from '../../../images/google1.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    //Loading
    if (loading) {
        return <Loading></Loading>
    }
    //Error
    if (error) {
        errorElement =
            <div>
                <p>Error: {error?.message}</p>
            </div>

    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>

            <div className='d-flex align-items-center '>
                <div style={{ height: '1px' }} className=' w-50 bg-primary'></div>
                <div className='px-2'>or</div>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            <span className='text-danger'>{errorElement}</span>
            <div className='mt-3'>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-info mw-50 d-block mx-auto'>
                    <img src={google} alt="" />
                    <span className='mx-2'>Google Sign In</span></button>
            </div>
        </div>

    );
};

export default SocialLogin;