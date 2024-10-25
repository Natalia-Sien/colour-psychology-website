import React from 'react';
import './Home.css';


const Overview = () => {
  return (
    <div className="introduction-container">
      <h1>Participants</h1>
      <div className="text-frame">
        <p>
        There were 68 people who started completing the questionnaire. 9 responses were not
completed and were excluded from the analysis. Therefore, in total the study recruited 59
participants (12 males and 47 females) above 18 years old (mean age M = 20, SD = 3.31,
range = 18 - 38 years) using volunteer and opportunity sampling via the SONA system. All of
the participants had normal colour vision. The G-power analysis (Faul et al., 2009) showed a
need for 25 participants, however to make sure the study has enough power, the study
recruited a bigger sample size.
        </p>
      </div>
      <h1>Design</h1>
      <div className="text-frame">
        <p>
        The study has a within-subject design, with three dependent variables (DV) and three
independent variables (IV). The dependent variables are: valence, arousal and liking of a
painting. The independent variables are: hue, saturation and brightness. The variables
saturation and brightness have two levels: high and low, and variable hue has three: yellow,
blue and brown
        </p>
      </div>

      <h1>Materials</h1>
      <div className="text-frame">
        <p>
        The study uses an online questionnaire created on Qualtrics (Qualtrics, Provo, UT). The
study uses 12 paintings chosen from Monet’s series of the Rouen Cathedral, varying in hue,
saturation and brightness. Pilot testing was run with three external raters to ensure the
colour categories were appropriate. The paintings were divided into three groups depending
on colour – yellow, blue and brown (see Table 2.1). In each colour group there are four 
paintings: one painting low in saturation and low in brightness, one high in saturation and
high in brightness, one low in saturation and high in brightness, and one high in saturation
and low in brightness. To see all the paintings go to Appendix. In the questionnaire, there were 12 randomised
blocks (4 blocks for each colour to contain one category of painting with varying saturation
and brightness), each consisting of a presentation of one painting for 15 seconds followed by
smaller version of this painting together with 3 scales: scale measuring valence (with labels:
“Negative”, “Neutral”, “Positive”), scale measuring arousal (“Calm”, “Neutral”, “Aroused”)
(Bradley & Lang, 1994), and scale measuring participants’ liking of the painting (“I don’t like it
  at all”, “Neither like nor dislike”, “I like it very much”). Each scale range is 1-100 points. To
  avoid any biases, the actual points were not shown to participants (see Figure 2.2).
        </p>
      </div>

      <h1>Procedure</h1>
      <div className="text-frame">
        <p>
        The study had been ethically approved prior to data collection. Participants read the
information sheet and provided informed consent. Then, they moved to the testing phase,
where they were presented with the paintings and asked to rate their emotion (valence and
arousal) and liking of the pieces. In each block participants looked at the painting for 15
seconds. After that the arrow button appeared, and they were able to move to the next page
to give an answer on three scales. Above the scales there was a small version of the
painting for a reference. Based on how the painting affected them, participants had to state
their level of valence and arousal, and how much they liked the painting. Last section of the
questionnaire asked about their gender and age. At the end, participants were presented
with the debriefing form.
        </p>
      </div>

      <h1>Data Analysis</h1>
      <div className="text-frame">
        <p>
        There were 3 three-factor ANOVAs used to analyse the data, one for each dependent
variable (arousal, valence and liking). The three independent variables were: hue (with 3
levels), saturation (2 levels), and brightness (2 levels). After finding a significant effect for
hue factor, Bonferroni post-hoc tests were conducted. Then, there were used Simple Main
Effects tests. The recommended effect size statistics, eta squared (η2) was reported (Olejnik
& Algina, 2003). To check the last hypothesis, two Pearson correlation tests were conducted,
one using liking and valence scores, and second using liking and arousal scores. All the data
analysis was performed using statistical software R (R Core Team, 2014).
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

export default Overview;
