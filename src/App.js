import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Interests from './components/interests';
import Login from './components/login';
import Register from './components/Register';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import FetchData from './components/fetchData';

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <>
      <div>
        <Toaster
          position='top-center' // we change it in different places like "top-right" etc.
          toastOptions={{
            success: {
              theme: {
                primary: '#4aed88',
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={
              user && user._id ? (
                <Interests setLoginUser={setLoginUser} />
              ) : (
                <Login setLoginUser={setLoginUser} />
              )
            }
          ></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route
            path='/login'
            element={<Login setLoginUser={setLoginUser} />}
          ></Route>
          <Route path='/interests' element={<Interests />}></Route>
          <Route
            setLoginUser={setLoginUser}
            path='/business'
            element={
              user && user._id ? (
                <FetchData cat='business' />
              ) : (
                (toast.error('Please Login to Continue'),
                (<Login setLoginUser={setLoginUser} />))
              )
            }
          ></Route>
          <Route
            setLoginUser={setLoginUser}
            path='/technology'
            element={
              user && user._id ? (
                <FetchData cat='technology' />
              ) : (
                (toast.error('Please Login to Continue'),
                (<Login setLoginUser={setLoginUser} />))
              )
            }
          ></Route>
          <Route
            path='/sports'
            element={
              user && user._id ? (
                <FetchData cat='sports' />
              ) : (
                (toast.error('Please Login to Continue'),
                (<Login setLoginUser={setLoginUser} />))
              )
            }
          ></Route>
          <Route
            path='/health'
            element={
              user && user._id ? (
                <FetchData cat='health' />
              ) : (
                (toast.error('Please Login to Continue'),
                (<Login setLoginUser={setLoginUser} />))
              )
            }
          ></Route>
          <Route
            path='/science'
            element={
              user && user._id ? (
                <FetchData cat='science' />
              ) : (
                (toast.error('Please Login to Continue'),
                (<Login setLoginUser={setLoginUser} />))
              )
            }
          ></Route>
          <Route
            path='/entertainment'
            element={
              user && user._id ? (
                <FetchData cat='entertainment' />
              ) : (
                (toast.error('Please Login to Continue'),
                (<Login setLoginUser={setLoginUser} />))
              )
            }
          ></Route>
          <Route
            setLoginUser={setLoginUser}
            path='/general'
            element={
              user && user._id ? (
                <FetchData cat='general' />
              ) : (
                (toast.error('Please Login to Continue'),
                (<Login setLoginUser={setLoginUser} />))
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
