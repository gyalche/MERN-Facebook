import React, { useContext, useRef } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import CircularProgress from '@mui/material/CircularProgress';
const Login = () => {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>DawaSocial</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you on dawasocial
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Email'
              className='loginInput'
              ref={email}
            />

            <input
              type='password'
              placeholder='password'
              className='loginInput'
              minLength={6}
              ref={password}
            />
            <button className='loginButton' disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color='secondary' size='20px' />
              ) : (
                'Login'
              )}
            </button>
            <span className='loginForgot'>Forgot password?</span>
            <button className='loginRegister'>
              {isFetching ? (
                <CircularProgress color='secondary' size='20px' />
              ) : (
                'Create an account'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
