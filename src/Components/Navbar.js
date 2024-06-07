
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <div>
            <ul className="navbar">
                <img src="sail.png" width="100px" height="80px"></img>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/photos">Photos</Link></li>
                <li><Link to="/users">Users</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
