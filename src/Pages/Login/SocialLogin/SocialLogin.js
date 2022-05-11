import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const location = useLocation();
  const [token] = useToken(user || user1);

  let from = location.state?.from?.pathname || "/";

  let errorElement;
  if(loading || loading1){
    return <Loading></Loading>
  }
  if (error || error1) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message} {error1?.message}</p>
      </div>
    );
  }

  if (token) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-3 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          type="button"
          className="btn btn-outline-primary w-50 d-block mx-auto p-2 rounded-pill my-3"
        >
          <img
            style={{ height: "30px" }}
            className="px-2"
            src={google}
            alt=""
          />
          Google Sign In
        </button>
        <button
          type="button"
          className="btn btn-outline-primary w-50 d-block mx-auto p-2 rounded-pill my-3"
        >
          <img
            style={{ height: "30px" }}
            className="px-2"
            src={facebook}
            alt=""
          />
          Facebook Sign In
        </button>
        <button onClick={()=>signInWithGithub()}
          type="button"
          className="btn btn-outline-dark w-50 d-block mx-auto p-2 rounded-pill my-3"
        >
          <img
            style={{ height: "30px" }}
            className="px-2"
            src={github}
            alt=""
          />
          GitHub Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
