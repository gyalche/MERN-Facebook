import React from 'react';
import './register.css';
const Register = () => {
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
            <input type='Text' placeholder='Username' className='loginInput' />
            <input type='Email' placeholder='Email' className='loginInput' />
            <input
              type='password'
              placeholder='Password'
              className='loginInput'
            />
            <input
              type='password'
              placeholder='password again'
              className='loginInput'
            />

            <input
              type='password'
              placeholder='password'
              className='loginInput'
            />
            <button className='loginButton'>Signup</button>
            <button className='loginRegister'>Login to your account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
