import { Link, useNavigate } from 'react-router-dom';
import {  useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import useToken from "../../../hooks/useToken";

const Register = () => {
  const [agree, setAgree] = useState(false);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(user);

    const navigate = useNavigate();
    const navigateToLogin = () =>{
        navigate('/login')
    }
    if(loading || updating){
      return <Loading></Loading>
    }
    if(token){
      navigate('/home');
    }

    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
      
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName:name });
        console.log('Updated profile');
        
    }

    return (
      <div className='register-form border border-primary rounded p-4 mt-4'>
      <h2 className='text-center text-primary mb-3'>Please Register</h2>
      <form onSubmit={handleRegister}>
          <input type="text" name="name" id="" placeholder='Your Name'/>
          
          <input type="email" name="email" id="" placeholder='Email Address' required/>
          
          <input type="password" name="password" id="" placeholder='Password' required/>
          <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />
          <label className={ `ms-1 ${agree? 'text-success':'text-secondary'}`} htmlFor="terms">Accept Genius Car Terms and Conditions </label>
          <input disabled={!agree} className='btn btn-primary w-50 mx-auto mt-3' type="submit" value="Register" />
      </form>
      <p>Already have an account? <Link to="/login" className='text-primary fw-bold text-decoration-none' onClick={navigateToLogin}>Please Login</Link> </p>
      <SocialLogin></SocialLogin>
  </div>
    );
};

export default Register;