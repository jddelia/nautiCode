import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="jumbo">
      <img 
        className="jumboImg" 
        src={require("../../assets/nauticodersmain.png")}
        alt="main logo" />

      <span className="jumboText">
        Explore Code, Gain Insight!
      </span>
      
      <img 
        className="jumboSourceCode" 
        src={require("../../assets/sourcecodejumbo.png")}
        alt="source code" />

      <Link to="/explore">
        <button className="jumboBtn">
          Explore
        </button>
      </Link>
    </header>
  );
};

export default Header;