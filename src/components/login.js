import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from './Navbar';

const Login = ({ setLoginUser }) => {
  const reactNavigator = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    const { email, password } = user;
    if (email && password) {
      axios.post('http://localhost:5000/login', user).then(
        //we're sending the inputs to the server
        (response) => {
          //response is received from the server and this is the user data fetched from the database.
          // alert(response.data.message);
          toast.success(response.data.message);
          setLoginUser(response.data.user); //user data set accordingl to the user data fetched from the database.
          reactNavigator('/');
        }
      );
    } else {
      toast.error('Invalid Input');
    }
  };

  return (
    <>
      <Navbar />
      <div className='login_wrapper'>
        <div className='login_container'>
          <h1 className='login_heading'>Login</h1>

          <input
            type='text'
            className='email'
            placeholder='Enter your email address'
            name='email'
            value={user.email}
            onChange={handleChange}
          ></input>
          <input
            type='password'
            className='password'
            placeholder='Enter your Password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />

          <button className='login_button' onClick={login}>
            Login
          </button>
          <span>If you don't have an account then, </span>
          <button className='register_button'>
            <Link to='/register'>Register</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
