import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
      auth
    );
    let location = useLocation();
    if(loading){
      return <Loading></Loading>
    }
     if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(user.providerData[0].providerId === 'password' && !user.emailVerified){
    return(
      <div className='text-center'>
        <h2 className='text-danger'>Email is not Verified</h2>
        <h5 className='text-success'>Please Verify Your Email Address</h5>
        <button className='btn btn-primary'
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Send Verify Email Again
      </button>
      <ToastContainer></ToastContainer>
      </div>
    )
  }

  return children;
};

export default RequireAuth;