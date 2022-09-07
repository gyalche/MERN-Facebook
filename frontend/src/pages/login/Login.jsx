import React from 'react';
import './login.css';
const Login = () => {
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
          <div className='loginBox'>
            <input type='Email' placeholder='Email' className='loginInput' />
            <input
              type='password'
              placeholder='password'
              className='loginInput'
            />
            <button className='loginButton'>Login</button>
            <span className='loginForgot'>Forgot password?</span>
            <button className='loginRegister'>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
