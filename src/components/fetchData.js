import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import './fetchData.css';
import { Link } from 'react-router-dom';

const FetchData = ({ cat, setLoginUser }) => {
  const [Data, setData] = useState('');

  const fetchData = async () => {
    await axios
      .get(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=297e1fe071dd4b94a305f7e71bcb0e1f`
          : `https://newsapi.org/v2/top-headlines?country=in&apiKey=297e1fe071dd4b94a305f7e71bcb0e1f`
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    fetchData();
  }, [cat]);

  return (
    <>
      <Navbar loginUser='loggedIn' />
      <div className='articles_wrapper'>
        <h1 className='heading'>Top Headlines</h1>
        <div className='articles'>
          {Data
            ? Data.map((items, index) => (
                <>
                  <div className='article'>
                    <h5>{items.title}</h5>
                    <img src={items.urlToImage} alt='img not found' />
                    <p>{items.description}</p>
                    <Link to={items.url}>View More</Link>
                  </div>
                </>
              ))
            : 'Loading...'}
        </div>
      </div>
    </>
  );
};

export default FetchData;
