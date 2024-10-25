import React from 'react';
import './Home.css';


const Study = () => {
  return (
    <div className="introduction-container">
      <h1>The current study</h1>
      <div className="text-frame">
        <p>
        The materials used in studies investigating the relationship between colour and emotion
were mostly colour patches. The current study aims to investigate the effect of hue,
saturation, and brightness on valence and arousal, but using visual art pieces. To avoid any
extraneous variable’s effect, that is painting’s subject, the study will use a series of paintings
presenting the same subject - Rouen Cathedral, painted by Claude Monet. The artist, one of
the founders of impressionism, painted the cathedral over 30 times in different weather
conditions and times of the day. Thanks to these differences, I could choose 12 paintings
varying by hue, saturation, and brightness and include them in my questionnaire. By doing
so, I kept the original paintings without modulating them for the needs of the study, and can
investigate the effect of real art on human psychology, specifically, effect of colour’s
characteristics. Results of the experiment could help to promote usage of certain types of
paintings to induce positive emotions in environments where maintaining a positive mood is
especially important.
        </p>
      </div>
      <h1>Hypotheses</h1>
      <div className="text-frame">
        <p>
        According to the previous literature, hypotheses were formed as follows. There is an
expected rise and fall in arousal when participants are presented with high- and
low-saturated paintings, respectively. There is hypothesised a rise and fall in valence when
presenting participants with high- and low-brightness paintings, respectively. Then, the
influence of hue is considered. It is hypothesised that blue and brown will elicit lower valence
and lower arousal, and yellow will elicit higher valence and higher arousal. Moreover, the
liking effect will be considered. It is hypothesised that paintings that are liked more will also
evoke more positive emotions.
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

export default Study;
