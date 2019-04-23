import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ navStyle }) => {

  return (
    <nav className="navbar" style={navStyle.navBar}>
      <div className="navLeft">
        <img 
          className="navLogo" 
          height={navStyle.navLogo.height} 
          src={require("../assets/astronauttransparent.png")}
          alt="astronaut" />
      </div>

      <div className="navRight">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/explore" className="navLink">Explore</Link>
        <Link to="/glossary" className="navLink">Glossary</Link>
      </div>
    </nav>
  );
};

export default Navbar;