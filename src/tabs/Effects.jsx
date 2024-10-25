import React from 'react';
import './Home.css';


const Effects = () => {
  return (
    <div className="introduction-container">
      <h1>The effect of colour on emotion</h1>
      <div className="text-frame">
        <p>
        For long colour and its effect on emotion has been a subject of interest of many researchers
(Valdez & Mehrabian,1994). Since colour is present everywhere, it is considered to be
directly having an effect on people’s psychological functioning (Jalil, Yunus & Said, 2012).
It can not only be associated with certain emotional states, but it can directly make them
happen (Elliot & Maier, 2013). In their study, Palmer and Schloss (2010) asked participants
to rate their liking of 32 colours and complete an object association task. These two scales
were found to have a strong correlation, suggesting that the more positive experiences a
person has with a certain colour, the more they will like that certain colour. They developed
the Ecological Valence Theory stating that colours associated with pleasant objects, like blue
- colour of the sky, green - grass, yellow - sunshine, are more likeable and evoked positive
emotions. On the contrary, colours related to unpleasant things, like brown - rooting, red - 
anger, evoke negative affect (Palmer and Schloss, 2010). Other studies show that colours
like red, blue and black, can evoke both positive and negative emotions (Kaya & Epps,
2004). For example, in the Dael et al. (2016) study, participants had to select the most
appropriate colour for the joy or fear expression. They found that the hues of the red-yellow
spectrum were generally perceived as joyful, and hues on the green-blue spectrum as fearful
and sad. 
        </p>
      </div>

      <div className="text-frame">
        <p>
        Fetterman, Robinson & Meier (2012) found that red fonts facilitated the recognition
of anger-related words. The red-anger mapping can have basis in human physiology, as
anger expressions usually result in blushing (Changizi, Zhang, & Shimojo, 2006). However,
red was also found to influence physical attraction, sexual desire and appetite (Pazda &
Greitemeyer, 2015). These inconsistencies have been attempted to be reconciled by other
theories - The Arousal Theory of Colour and Colour in Context Theory, investigating
influence of colour on emotion dimensions - arousal and valence respectively. The first one
states that long-wavelength colours (like red and yellow) were found as more arousing than
short-wavelength colours (like blue and green) (e.g., Gerard, 1958; Jacobs & Hustmyer,
1974; Wilson, 1966). The evidence comes from motor inhibition tasks, where participants
exposed to red colour experienced greater excitement resulting in hand tremor and faster
movement than when exposed to green (Nakshian, 1964). The Colour in Context Theory
(Elliot & Maier, 2012) focuses on the influence of colour on valence dimension on emotion,
suggesting that how positively or negatively someone feels after viewing a colour is
determined by the circumstances of that viewing. That is why red in the achievement context
signalises danger and activates avoidance, and in romantic context signalises love and
activates motivation.
        </p>
      </div>

      <div className="text-frame">
        <p>
        More recent research pointed out that the majority of studies investigated the effect of only
one characteristic of colour - hue, and did not take into consideration saturation and
brightness (Wilms & Oberfeld, 2017). The interdependency of hue, saturation and brightness
and lack of control for these three factors could have caused heterogeneity in the results and
could have overestimated the role of hue on its own (Dael et al., 2016). 
However, also some older papers show this inconsistency. Gelineau (1981) pointed out two
major problems with the methodology of studies investigating colour and emotions. First one
is not adequate colour stimuli - failing to control for levels of saturation and brightness when
investigating hue. The second group of problems is failing to use reliable scales when
measuring emotion. Often what was measured was association of words describing
emotions, like disgust - brown, sadness - blue, and not the direct effect of colour on how
people feel.
        </p>
      </div>

      <div className="text-frame">
        <p>
        However, when focusing on the effect of saturation and brightness, the research shows more
consistency. More saturated colours were found to cause higher arousal, and brighter
colours were found to evoke more positive emotions (Zielinski, 2016; Valdez &
Mehrabian,1994). For example, Meier, Robinson, & Clore (2004) investigated the effect of
brightness on positivity. They found that bright colours fonts facilitated the recognition of
positive words while dark fonts facilitate the recognition of negative words. Moreover,
brightness was found to be universally associated with positivity, even cross-culturally
(Specker et al., 2018). Lakens et al. (2013) found an effect of brightness that they called a
“brightness bias”. When they used naturalistic pictures to investigate the effect of brightness,
the brighter pictures were rated as more positive.
        </p>
      </div>

      <div className="text-frame">
        <p>
        Also studies investigating the effect of saturation have more consistency, show a clear
association between saturation and arousal levels (Whitfield & Wiltshire, 1990; Wright &
Rainwater, 1962). Wright & Rainwater (1962) used 50 colour chips to investigate the
relationship between colour dimensions and emotion and found the biggest linear effect of
saturation on arousal. Kwallek et al. (1996) measured how office interiors painted in different
colours affected participants' mood and performance. They found that higher saturation
elicited more vigour and subjective arousal. The evidence comes not only from studies
relying on subjective responses, but also, from research on physiological effects of valence
and saturation. Zielinski (2016) explored the relationship between 16 different colours
varying in dimensions, self-rated arousal and skin conductance responses. He found that
only saturation significantly correlated with higher skin conducted responses (importantly - in
an abstract situation of the study, without any context given to participants).
These studies show the direct effect of certain colour dimensions on emotions and can be a
starting point for a more detailed future research in psychology of art domain, to achieve the
best possible results of art interventions by evaluation of the current existing tools
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

export default Effects;
