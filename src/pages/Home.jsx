import React from 'react';
import './Home.css'; 
import { useNavigate } from 'react-router-dom';
import HomeVideo from "../assets/HomeVideo.mp4"; 

const Home = () => {
    const navigate = useNavigate();
    return (
      <>
        <div className="home-container">
          <video autoPlay loop muted className="home-video">
            <source src={HomeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay">
            <h1>Colour Psychology</h1>
            <p>Explore the influence of art</p>
          </div>
        </div>

        <br></br><br></br><br></br>

        <div className="content-below-video">
          <h2 id="introduction">What is it about?</h2>
          
          <div className="section">
            <p>Visual art is commonly known as an aesthetic stimulus that causes emotional reactions.
            According to the research, the emotional reaction is partially due to the bottom-up processes
            of visual space like shape and colour because of its rapidity - happening as early as 120 ms
            after viewing the painting. The influence of colours on emotions has been widely examined
            in research, however, the findings vary across different studies.</p>
            <button onClick={() => navigate('/introduction')}>
              Read more
            </button>
          </div>

          <div className="section">
            <p>The current study recruited 59 participants to complete an online questionnaire that
            investigates the effect of colour dimensions - hue, saturation, and brightness on emotion
            dimensions - valence and arousal. Participants viewed 12 paintings of Monet’s Rouen
            Cathedral that were selected to vary in colour dimensions. After viewing each painting,
            participants reported their levels of valence, arousal, and liking on three separate 1-100 scales.</p>
            <button onClick={() => navigate('/methods')}>
              Read more
            </button>
          </div>

          <div className="section">
            <p>In line with the past research, high saturation of colour was found to elicit high levels of
            arousal in participants, and high brightness was found to elicit high valence. Moreover,
            yellow hue was shown to cause significantly higher valence than brown and blue hues
            respectively. However, there was no significant effect of hues on arousal, suggesting that the
            arousal levels are more influenced by other colour dimensions. The study also shows that
            higher liking of an art piece is related to more positive emotions.</p>
            <button onClick={() => navigate('/results')}>
              Read more
            </button>
          </div>

          <div className="section">
            <p>Knowing that just by exposure to artwork, certain emotions can be evoked, researchers can
            encourage the use of art as a medium in different areas of life, to reduce negative emotion.</p>
            <button onClick={() => navigate('/discussion')}>
              Read more
            </button>
          </div>
        </div>
      </>
  );
};

export default Home;
