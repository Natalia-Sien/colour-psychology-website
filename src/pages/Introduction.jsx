import React from 'react';
import './Home.css';

const Introduction = () => {
  return (
    <div className="introduction-container">
      <h1>Introduction</h1>
      <div className="text-frame">
        <p>
          Visual art is commonly known as an aesthetic stimulus that causes emotional reactions (Tan, 2000). These may include astonishment and confusion, arousal and underwhelm, happiness and disgust, each at a slight or even profound level (Pelowski et al., 2017). The aesthetic pleasure was found to evoke positive emotions, like relaxation and calmness, and novelty in paintings to cause arousal (Berlyne, 1971).
        </p>
      </div>

      <div className="text-frame">
        <p>
          Understanding what is in art that can influence individuals to such an extent is one of the goals of psychological science (Tinio & Leder, 2013). Viewing art is seen as involving both bottom-up processes that analyse certain art’s features, and top-down processes that contribute to this action with memory and context (Leder, Belke, Oeberst & Augustin, 2004).
        </p>
      </div>

      <div className="text-frame">
        <p>
          Past research in cognitive psychology proposed various theoretical models that can underlie our engagement with art, focusing on processing formal artwork’s aspects, that is for example symmetry, complexity, lines and colours (Ramachandran & Hirstein, 1999). The research also investigates the effects of paintings’ elements, appealing colours in association with certain shapes (Pickford, 1972). All these approaches highlight the significance of certain elements of art and emphasise low-level features, such as colour.
        </p>
      </div>

      <div className="text-frame">
        <p>
          The influence of colours on emotions has been widely examined in research; however, the findings vary across different studies (Kang, Shim & Yoon, 2018). To understand this relationship, we have to understand certain characteristics of both colour and emotion.
        </p>
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
