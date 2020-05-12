import React, { useState, useEffect } from 'react';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import HomeButton from './components/buttons/HomeButton';
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom';

import './App.css';

function App() {
  const linkStyle = {
    marginRight: '20px',
  };

  const location = useLocation();

  let queryParam = useLocation().search;

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className='container'>
      <div>
        <HomeButton />
        {/* <Link to='/' style={linkStyle}>
            Home
          </Link> */}
        <Link to='/todos?tacos=delicious' style={linkStyle}>
          Todos
        </Link>
        <Link to='/about' style={linkStyle}>
          About
        </Link>
      </div>

      <div>
        <h2>Query Params: {queryParam}</h2>
      </div>

      <Route exact path='/' component={HomePage}></Route>
      <Route path='/todos' component={TodoPage} />
      <Route path='/about' component={AboutPage} />
    </div>
  );
}

export default App;
