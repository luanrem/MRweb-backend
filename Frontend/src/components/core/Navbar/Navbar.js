import React from 'react';
import './Navbar.css'

// import { Container } from './styles';

export default function Navbar() {
  return (
    <div className="navbar">
        <ul className="navbarMenu">
            <li><a href="SIDE">HOME</a></li>
            <li><a href="SIDE">About Us</a></li>
            <li><a href="SIDE">Posts</a></li>
            <li><a href="SIDE">Contact Us</a></li>
        </ul>
    </div>
  );
}
