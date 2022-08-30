import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='nav-container'>
           <ul>
            <li><a>Products</a></li>
            <li>Listings</li>
            <li>About Us</li>
            <li>Support</li>
            <li>Sign In</li>
           </ul>
        </div>
    )
}

export default Navigation;