import React from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './navbar.css';

const Navbar = ({ loginUser, setLoginUser }) => {
  const logOut = () => {
    setLoginUser({});
    toast.success('Logged out successfully');
  };

  return (
    <>
      <div className='nav'>
        <Link to='/' className='logo'>
          NewsHub
        </Link>
        <div className='links'>
          <Link to='/general'>General</Link>
          <Link to='/business'>Business</Link>
          <Link to='/entertainment'>Entertainment</Link>
          <Link to='/health'>Health</Link>
          <Link to='/science'>Science</Link>
          <Link to='/sports'>Sports</Link>
          <Link to='/technology'>Technology</Link>
          <div className='login_links'>
            <Link to='/login' onClick={logOut}>
              {loginUser === 'loggedIn' ? `logout` : `login`}
            </Link>
            <Link to='/register'>Register</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
