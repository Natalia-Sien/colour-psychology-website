import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">ColourPsych</Link>
      </div>

      <ul className="nav-links">

        <li><Link to="/">HOME</Link></li>
        
        <li className="dropdown">
          <Link to="/introduction">INTRODUCTION</Link>
          <ul className="dropdown-menu">
            <li><Link to="/characteristics">Colour and emotion characteristics</Link></li>
            <li><Link to="/effects"> The effect of colour on emotion</Link></li>
            <li><Link to="/benefits">Benefits of using art in psychology</Link></li>
            <li><Link to="/study">The current study</Link></li>
          </ul>
        </li>
        
        <li className="dropdown">
          <Link to="/methods">METHODS</Link>
          <ul className="dropdown-menu">
            <li><Link to="/overview">Overview</Link></li>
            <li><Link to="/paintings">Paintings</Link></li>
            <li><Link to="/questionnaire">Questionnaire</Link></li>
          </ul>
        </li>
        
        <li className="dropdown">
          <Link to="/results">RESULTS</Link>
          <ul className="dropdown-menu">
            <li><Link to="/results">Summary</Link></li>
            <li><Link to="/graphs">Graphs</Link></li>
          </ul>
        </li>
        
        <li className="dropdown">
          <Link to="/discussion">DISCUSSION</Link>
          <ul className="dropdown-menu">
            <li><Link to="/findings">Key findings</Link></li>
            <li><Link to="/implications">Practical implications</Link></li>
            <li><Link to="/future">Limitations and future work</Link></li>
          </ul>
        </li>
        
        <li>
            <Link to="/myself">ABOUT ME</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
