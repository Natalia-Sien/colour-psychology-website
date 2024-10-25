import React, { useState } from 'react'; 
import './GraphGallery.css';
import ArousalHueSaturation from '../assets/Arousal Hue Saturation.png';
import ArousalHueBrightness from '../assets/Arousal Hue Brightness.png';
import ArousalYellowBrightnessSaturation from '../assets/Arousal Yellow Brightness Saturation.png';
import ArousalYellowSaturationBrightness from '../assets/Arousal Yellow Saturation Brightness.png';

const GraphGallery = () => { 
  
  const graphImages = [
    { src: ArousalHueSaturation, alt: 'Graph 1', caption: 'Arousal Hue x Saturation' },
    { src: ArousalHueBrightness, alt: 'Graph 2', caption: 'Arousal Hue x Brightness' },
    { src: ArousalYellowBrightnessSaturation, alt: 'Graph 3', caption: 'Arousal - Yellow x Brightness x Saturation' },
    { src: ArousalYellowSaturationBrightness, alt: 'Graph 4', caption: 'Arousal - Yellow x Saturation x Brightness' }
  ];

  
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? graphImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === graphImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="graph-gallery">
      <h3>Graph Gallery</h3>
      <div className="graph-gallery-container">
        <div className="graph-item">
          <img 
            src={graphImages[currentIndex].src} 
            alt={graphImages[currentIndex].alt} 
            className="graph-image" 
          />
          <p className="graph-caption">{graphImages[currentIndex].caption}</p>
        </div>
      </div>
      <div className="gallery-navigation">
        <button onClick={handlePrev} className="nav-button">❮</button>
        <button onClick={handleNext} className="nav-button">❯</button>
      </div>
    </div>
  );
};

export default GraphGallery; 