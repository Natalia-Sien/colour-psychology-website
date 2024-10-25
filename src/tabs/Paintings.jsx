import React from 'react';
import './Home.css';
import Yellow from '../assets/Yellow.png'; 
import Blue from '../assets/Blue.png'; 
import Brown from '../assets/Brown.png';

const Paintings = () => {
  return (
    <div className="introduction-container">

      <div className="colour-name">
      <h1>Yellow</h1>
      </div>

      <div className="image-container">
        <img src={Yellow} alt="Art Example 2" className="art-image" />
      </div>
      <br></br>

      <div className="colour-name">
      <h1>Blue</h1>
      </div>

      <div className="image-container">
        <img src={Blue} alt="Art Example 2" className="art-image" />
      </div>
      <br></br>

      <div className="colour-name">
      <h1>Brown</h1>
      </div>

      <div className="image-container">
        <img src={Brown} alt="Art Example 2" className="art-image" />
      </div>

    </div>
  );
};

export default Paintings;
