import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [createUserWithEmailAndPassword, user, loading] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    // Loading
    if (loading) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/')

    }
    if (user) {
        console.log('user', user);
    }
    return (
        <div className='register-form mt-5'>
            <h2 className='text-center text-info '>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="fname" placeholder='Your Name' />

                <input type="email" name="email" id="mail" placeholder='Email Address' required />

                <input type="password" name="password" id="pass" placeholder='Password' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'} `} htmlFor="terms">Accept Genius Car Terms and Condition.</label>

                <input
                    disabled={!agree}
                    className='mx-auto mt-3 w-50 btn btn-info' type="submit" value="Register" />

            </form>
            <p className='mt-2'>Already have an account? <Link to="/login" className='text-primary  pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>

    );

};

export default Register;