import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import Navbar from './Navbar';
const Register = () => {
  const reactNavigator = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    reEnterPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post('http://localhost:5000/register', user).then((res) => {
        toast.success(res.data.message);
        reactNavigator('/login');
      });
    } else {
      toast.error('Invalid input');
    }
  };

  return (
    <>
      <Navbar />
      <div className='login_wrapper'>
        <div className='login_container'>
          <h1 className='login_heading'>Register</h1>
          <input
            type='text'
            className='name'
            placeholder='Enter your Name'
            name='name'
            value={user.name}
            onChange={handleChange}
          />
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
          <input
            type='password'
            className='password'
            placeholder='Re-Enter your Password'
            name='reEnterPassword'
            value={user.reEnterPassword}
            onChange={handleChange}
          />
          <div className='buttons'>
            <button className='register_button' onClick={register}>
              Register
            </button>
            <button className='login_button'>
              <Link to='/login'>Login</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
