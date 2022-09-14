import React, { useRef } from 'react';
import './register.css';
import axios from '../../axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordagain = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordagain.current.value !== password.current.value) {
      passwordagain.current.setCustomValidity('password doesnt match');
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
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
              type='Text'
              ref={username}
              placeholder='Username'
              className='loginInput'
              required
            />
            <input
              type='email'
              ref={email}
              placeholder='Email'
              className='loginInput'
              required
            />
            <input
              type='password'
              ref={password}
              placeholder='Password'
              className='loginInput'
              required
              minLength={6}
            />
            <input
              type='password'
              ref={passwordagain}
              placeholder='password again'
              className='loginInput'
              required
              minLength={6}
            />

            <button className='loginButton' type='submit'>
              Signup
            </button>
            <button className='loginRegister'>Login to your account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
