import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './interests.css';
import Navbar from './Navbar';

const Interests = ({ setLoginUser }) => {
  const logOut = () => {
    setLoginUser({});
    toast.success('Logged out successfully');
  };

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setSelectedCheckboxes((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };

  return (
    <>
      <Navbar loginUser='loggedIn' />
      <div className='interests_wrapper'>
        <h1>What Are Your Interests?</h1>
        <div className='newsTags'>
          <div className='container'>
            <ul className='ks-cboxtags'>
              <li>
                <input
                  type='checkbox'
                  id='checkboxBusiness'
                  value='business'
                  onChange={handleCheckboxChange}
                  checked={selectedCheckboxes.includes('business')}
                />
                <label htmlFor='checkboxBusiness'>Business</label>
              </li>
              <li>
                <input
                  type='checkbox'
                  id='checkboxTechnology'
                  value='technology'
                  onChange={handleCheckboxChange}
                  checked={selectedCheckboxes.includes('technology')}
                />
                <label htmlFor='checkboxTechnology'>Technology</label>
              </li>
              <li>
                <input
                  type='checkbox'
                  id='checkboxScience'
                  value='science'
                  onChange={handleCheckboxChange}
                  checked={selectedCheckboxes.includes('science')}
                />
                <label htmlFor='checkboxScience'>Science</label>
              </li>
              <li>
                <input
                  type='checkbox'
                  id='checkboxHealth'
                  value='health'
                  onChange={handleCheckboxChange}
                  checked={selectedCheckboxes.includes('health')}
                />
                <label htmlFor='checkboxHealth'>Health</label>
              </li>
              <li>
                <input
                  type='checkbox'
                  id='checkboxgeneral'
                  value='general'
                  onChange={handleCheckboxChange}
                  checked={selectedCheckboxes.includes('general')}
                />
                <label htmlFor='checkboxgeneral'>General</label>
              </li>
              <li>
                <input
                  type='checkbox'
                  id='checkboxSports'
                  value='sports'
                  onChange={handleCheckboxChange}
                  checked={selectedCheckboxes.includes('sports')}
                />
                <label htmlFor='checkboxgeneral'>Sports</label>
              </li>

              {/* Add more real news categories */}
            </ul>
            <div className='buttons'>
              <button className='feed_button'>
                <Link to='/general'>Go to NewsFeed</Link>
              </button>
              <button className='login_button'>
                <Link to='/' onClick={logOut}>
                  LogOut
                </Link>
              </button>
            </div>
          </div>
          {/* ... */}
        </div>

        <div className='selected'>
          Selected Tags: {selectedCheckboxes.join(', ')}
        </div>
      </div>
    </>
  );
};

export default Interests;
