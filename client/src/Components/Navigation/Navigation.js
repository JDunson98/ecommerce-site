import React from 'react';
import './Navigation.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const Navigation = () => {
    return (
        <Router>
            <div className='nav-container'>
            <ul>
                <li><Link to='/'>All Products</Link></li>
                <li><Link to='/categories'>Categories</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/support'>Support</Link></li>
            </ul>
            </div>
        </Router>
        )
}

export default Navigation;