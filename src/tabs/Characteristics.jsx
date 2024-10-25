import React from 'react';
import './Home.css';
import dimensions from '../assets/dimensions.png'; 
import waves2 from '../assets/waves2.png'; 

const Introduction = () => {
  return (
    <div className="introduction-container">
      <h1>Colour and emotion characteristics</h1>
      <div className="text-frame">
        <p>
        To investigate the link between colour and emotion, we have to consider the dimensions of
these two concepts. First categorisation of colour dimensions as uniform and independent
from each other was done by Munsell who created a three-dimensional colour system, using
the following properties of colour: hue, chroma (saturation) and value (brightness) (Munsell,
1912). Hue is a wavelength that falls into the visible light spectrum, and its length will
determine the colour that we can see (Specker et al., 2018). Our perception of red is associated with longer wavelengths, green with intermediate wavelengths and blue and
violet with shorter wavelengths (see Figure 1.1.1) Saturation (or chroma) is the vividness of
colour where high saturated colours are more intense than low saturated colours. With
increase of saturation, colour will become sharper and purer. Brightness (or value) is defined
by the size of an amplitude of the wavelength, and can make colour lighter or darker
(Specker et al., 2018).
        </p>
      </div>

      <div className="image-container">
        <img src={waves2} alt="Art Example 2" className="art-image" />
      </div>

      <div className="text-frame">
        <p>
        Defining emotions and distinguishing them from each other has been a challenge for
researchers. The difficulty comes from how differently emotions are described across
different languages and cultures (Roberson, Davidoff, Davies, & Shapiro, 2005). However,
some of them are universal like fear, anger, happiness and sadness. The simplified model of
emotions includes two dimensions: valence (positive - negative scale) and arousal (calm -
aroused scale) (Bradley & Lang, 1994). Therefore, valence indicates how pleasant or
unpleasant the emotion is, and arousal refers to how much energy there is in an emotional
state. High valence with high arousal refers to happiness while low valence and low arousal 
refers to sadness. High valence with low arousal refers to calm while low valence with high
arousal shows annoyance (see Figure 1.1.2).
        </p>
      </div>

      <div className="image-container">
        <img src={dimensions} alt="Art Example 2" className="art-image" />
      </div>

      
      <div className="button-container">
        <button onClick={() => alert('Learn more about art psychology!')} className="learn-more-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Introduction;
