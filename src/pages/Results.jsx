import React, { useState } from 'react';
import './Home.css';

const Results = () => {
  
  const [expanded, setExpanded] = useState({
    box1: [false, false, false, false, false],
    box2: [false, false, false, false, false],
    box3: [false, false, false, false, false],
  });

  const handleToggle = (box, index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [box]: prevState[box].map((item, i) =>
        i === index ? !item : item
      ),
    }));
  };

  return (
    <div className="results-container">
       <br></br>
       <h2 id="resultsection">Results</h2>

       <br></br>

     <div className="features-container">
      <div className="feature-box">
        <h3>Arousal</h3>
        <ul>

          <li onClick={() => handleToggle('box1', 0)}>
            Three-Way Analysis of Variance (ANOVA)
            {expanded.box1[0] && <p>
A 3 (Hue: Blue vs. Yellow vs. Brown) × 2 (Saturation: low vs. high) × 2 (Brightness: low vs.
high) within-participants ANOVA was conducted.
<br></br><br></br>
The main effect of Hue was non-significant, F(2,116) = 1.17, p = .313, η2 = 0.02, 95%
CI[0.00, 1.00]; and the main effect of Brightness was non-significant, F(1,58) = 0.25, p =
.620, η2 .01, 95% CI[0.00, 1.00]. 
<br></br><br></br>
Only the main effect of Saturation was found to be
significant F(1,58) = 5.32, p = .025, η2 = 0.08, 95% CI[0.01, 1.00]. That is, only Saturation
was found to be a significant predictor of the Arousal in participants looking at the paintings,
independent from other variables. The overall mean of arousal for low Saturation is M =
44.26, SD = 23.97, while the for high Saturation is M = 48.82, SD = 25.06. 
<br></br><br></br>
Therefore, it can be concluded that high Saturation caused higher levels of Arousal in participants, and low
level of Saturation caused lower levels of Arousal.</p>}
          </li>

          <li onClick={() => handleToggle('box1', 1)}>
            Hue x Saturation Interaction
            {expanded.box1[1] && <p>
There was found a significant Hue x Saturation interaction, 
F(2,116) = 15.2, p .001, η2 = 0.21, 95% CI[0.10, 1.00]. 
<br></br><br></br>
Analysis of the Simple Main Effects showed a significant effect of
Saturation for Yellow Hue F(1, 162.47) = 28.77, p .001. 
<br></br><br></br>
In the Yellow condition, the Arousal levels for high Saturation were higher 
compared to levels for low Saturation, (low Saturation
M = 38.8, SD = 23 vs high Saturation M = 54.45, SD = 24.6), (see Figure 3.1.1.). 
<br></br><br></br>
However,there were no significant effects for Blue and Brown conditions (p .05).</p>}
          </li>

          <li onClick={() => handleToggle('box1', 2)}>
            Hue x Brightness Interaction
            {expanded.box1[2] && <p>
There was found a significant Hue x Brightness interaction, F(2.116) =20.80, p .001, η2 =
0.26, 95% CI[0.15, 1.00]. 
<br></br><br></br>
Analysis of the Simple Main Effects showed a significant effect of
Brightness on Blue Hue (F(1,173.89) = 4.46, p = .036), on Yellow Hue (F(1, 173.89) =
24.53, p .001), and on Brown Hue (F(1,173.89) = 13.60, p .001).
<br></br><br></br>
Participants experienced lower Arousal when they were looking at Yellow paintings of low
Brightness, and higher Arousal when the Brightness was higher (low Brightness M = 39.73,
SD = 23.93, high Brightness M = 53.53, SD = 27.16) (see Figure 3.1.2).
<br></br><br></br>
Oppositely, when participants were looking at Blue paintings of low Brightness they
experienced higher Arousal than when they were looking at Blue paintings of high
Brightness (low Brightness M = 47.39, SD = 25.35, high Brightness M = 41.50, SD = 23.51).
<br></br><br></br>
Also, when they were looking at brown paintings of low Brightness they experienced higher
Arousal than when they were looking at Brown paintings of high Brightness (low Brightness
M = 53.69, SD = 21.14, high Brightness M = 43.41, SD = 22.85)</p>}
          </li>

          <li onClick={() => handleToggle('box1', 3)}>
            Saturation x Brightness Interaction
            {expanded.box1[3] && <p>The Saturation × Brightness interaction was non-significant, F(1,58) = 0.01, p = .945, η2 
              0.01, 95% CI[0.00, 1.00]</p>}
          </li>

          <li onClick={() => handleToggle('box1', 4)}>
            Hue x Saturation x Brightness Interaction
            {expanded.box1[4] && <p>Critically, there was a significant three-way interaction, F(2,116) = 11.87, p .001, η2 = 0.17,
              95% CI[0.07, 1.00], (Bonferroni corrected p = .003).</p>}
          </li>

        </ul>
      </div>

      <div className="feature-box">
        <h3>Valence</h3>
        <ul>
          <li onClick={() => handleToggle('box2', 0)}>
            Three-Way Analysis of Variance (ANOVA)
            {expanded.box2[0] && <p>A 3 (Hue: Blue vs. Yellow vs. Brown) × 2 (Saturation: low vs. high) × 2 (Brightness: low vs.
high) within-participants ANOVA was conducted.
<br></br><br></br>
The main effect of Hue was found to be significant F(2,116) = 53.43, p .001, η2 = 0.48,
95% CI[0.07, 1.00]. That is, Hue was found to be a significant predictor of the Valence in
participants looking at the paintings, independent from other variables (Bonferroni corrected
p = .003). The overall mean of Valence for Blue Hue is M = 43.56, SD = 23.34, for Yellow
Hue is M = 64.72, SD = 21.10, and for Brown Hue M = 41.11, SD = 23.46. It can be
concluded that Yellow Hue caused the highest levels of Valence, and the effect of Blue was
lower and Brown Hue was the lowest.
<br></br><br></br>
The main effect of Saturation was found to be significant F(1,58) = 19.02, p .001, η2 =
0.25, 95% CI[0.10, 1.00]. That is, Saturation was found to be a significant predictor of the
Valence in participants looking at the paintings, independent from other variables. The
overall mean of Valence for low Saturation is M = 45.41, SD = 24.98, while for high
Saturation is M = 54.18, SD = 24.90. Therefore, it can be concluded that high Saturation
caused higher levels of Valence in participants, and low level of Saturation caused lower
levels of Valence.
<br></br><br></br>
The main effect of Brightness was found to be significant F(1,58) = 10.17, p = .002, η2 =
0.15, 95% CI[0.04, 1.00] That is, Brightness was found to be a significant predictor of the
Valence in participants looking at the paintings, independent from other variables. The
overall mean of Valence for low Brightness is M = 47.47, SD =25.76, while for high
Brightness is M = 52.10 , SD = 24.66. Therefore, it can be concluded that high Brightness
caused higher levels of Valence in participants, and low level of Brightness caused lower
levels of Valence</p>}
          </li>
          <li onClick={() => handleToggle('box2', 1)}>
            Hue x Saturation Interaction
            {expanded.box2[1] && <p>
There was found a significant Hue x Brightness interaction, 
F(2,116) = 6.75, p = .002, η2 = 0.10, 95% CI[0.03, 1.00]. 
Analysis of the Simple Main Effects showed a significant effect of
Saturation on Blue Hue F(1,154.50) = 23.03, p .001. 
<br></br><br></br>
It shows that the lower the Saturation of Blue paintings is, the lower the level of Valence, and the higher Saturation of Blue
paintings is, the higher the participants’ level of Valence (low Saturation M = 36.75, SD =
23.65 vs high Saturation M = 50.38, SD = 23.17) (see Figure 3.2.1).
<br></br><br></br>
Moreover, there was a significant effect of Saturation on Brown Hue F(1,154.50)= 15.38, p
.001. In the Brown condition, the Valence levels for high Saturation were higher compared to
levels for low Saturation, (low Saturation M = 35.53, SD = 21.36 vs high Saturation M =
46.68, SD = 24.23).
<br></br><br></br>
However, no significant effect of Saturation was found on Yellow Hue (p .05).</p>}
          </li>
          <li onClick={() => handleToggle('box2', 2)}>
           Hue x Brightness Interaction
            {expanded.box2[2] && <p>
There was found a significant Hue x Brightness interaction, F(2,116) = 4.31, p = .016, η2 =
0.07, 95% CI[0.01, 1.00]. Analysis of the Simple Main Effects showed a significant effect of
Brightness on Blue Hue F(1,173.45) = 6.07, p = .015. 
<br></br><br></br>
It shows that the lower the Brightness of Blue paintings is, the lower observed 
the participants’ level of Valence, and and the higher
Brightness of Blue paintings is, the higher the participants’ level of Valence, (low Brightness
M = 40.58, SD = 25.62 vs high Saturation M = 46.55, SD = 22.70) (see Figure 3.2.2).
<br></br><br></br>
Moreover, there was a significant effect of Brightness on Brown Hue F(1,173.45) = 13.073,
p &lt; .001. It shows that the lower the Brightness of Brown paintings is, the lower observed the
participants’ level of Valence, and and the higher Brightness of Brown paintings is, the higher
the participants’ level of Valence, (low Brightness M = 36.72, SD = 21.95 vs high Brightness
M = 45.49, SD = 24.19).
<br></br><br></br>
However, no significant effect of Brightness was found on Yellow Hue (p &gt; .05).</p>}
          </li>

          <li onClick={() => handleToggle('box2', 3)}>
            Saturation x Brightness Interaction
            {expanded.box2[3] && <p>The Saturation × Brightness interaction was non-significant, F(1,58) = 0.26, p = .612, η2 &lt;
              .01, 95% CI[0.00, 1.00]</p>}
          </li>
          <li onClick={() => handleToggle('box2', 4)}>
            Hue x Saturation x Brightness Interaction
            {expanded.box2[4] && <p>
Critically, there was a significant three-way interaction, F(2,116) = 5.37, p = .006, η2 = 0.08, 95% CI[0.02, 1.00].
<br></br><br></br>
To explore the three-way interaction, three 2 (Saturation) × 2 (Brightness) ANOVAs were conducted—one using the data for Blue Hue only, 
second using the data for the Yellow Hue only and the third one using data for the Brown Hue only.
<br></br><br></br>
For the first ANOVA on the Blue Hue data, there was no significant interaction, F(1,58) = 1.70, p = .200.
<br></br><br></br>
For the second ANOVA on the Yellow Hue data, there was no significant interaction, F(1,58) = 3.29, p = .075.
<br></br><br></br>
Only the third ANOVA on the Brown Hue data showed a significant interaction, F(1,58) = 6.38, p = .014, η2 = 0.10, 95% CI[0.01, 1.00]. 
At a high level of Saturation the simple main effect of Brightness was found significant F(1,113.18) = 18.51, 
p &lt; .001. Participants when looking at high Saturation high Brightness paintings experienced higher Valence (M = 53.8, SD = 23.7), 
and when looking at high Saturation low Brightness paintings, they experienced lower valence (M = 39.6, SD = 22.8), (see Figure 3.2.3).
At a low level of Saturation the simple main effect of Brightness was non significant (p &gt; .05).
<br></br><br></br>
Also at a high level of Brightness the simple main effect of Saturation was found significant F(1,106.55)= 21.04, p &lt; .001. 
Participants when looking at high Brightness lower Saturated paintings experienced lower Valence (M = 37.2, SD = 21.9) and when looking at 
higher Saturated paintings, they experienced higher Valence (M = 53.8, SD = 23.7), (see Figure 3.2.4).
At a low level of Brightness the simple main effect of Saturation was non significant (p &gt; .05).

</p>}
          </li>
        </ul>
      </div>

      <div className="feature-box">
        <h3>Liking</h3>
        <ul>
          <li onClick={() => handleToggle('box3', 0)}>
            Three-Way Analysis of Variance (ANOVA)
            {expanded.box3[0] && <p>
A 3 (Hue: Blue vs. Yellow vs. Brown) × 2 (Saturation: low vs. high) × 2 (Brightness: low vs. high) within-participants ANOVA was conducted.
<br></br><br></br>
The main effect of Hue was found to be significant F(2,116) = 16.64, p &lt; .001, η2 = 0.22, 95% CI[0.12, 1.00]. That is, Hue was found to 
be a significant predictor of the Liking in participants looking at the paintings, independent from other variables (Bonferroni corrected p = .003). 
<br></br><br></br>
The overall mean of Liking for Blue Hue is M = 45.34 , SD = 29.25, for Yellow Hue is M = 60.19, SD = 25.99, and for Brown Hue M = 47.20, SD = 29.15. It can be concluded
that Yellow Hue caused the highest Liking, and the effect of Brown was lower and Blue Hue was the lowest.
<br></br><br></br>
The main effect of Saturation was found to be significant F(1,58) = 33.51, p %lt; .001, η2 = 0.37, 95% CI[0.21, 1.00]. 
That is, Saturation was found to be a significant predictor of the Liking in participants looking at the paintings, independent from other variables. 
The overall mean of Liking for low Saturation is M = 43.54, SD = 28.55, while for high Saturation is M = 58.27, SD = 27.36. 
<br></br><br></br>
Therefore, it can be concluded that high Saturation caused higher Liking in participants, and low Saturation caused lower Liking.
The main effect of Brightness was found not to be significant (p &gt; .05), η2 &lt; 0.01, 95% CI[0.00, 1.00].
</p>}
          </li>
          <li onClick={() => handleToggle('box3', 1)}>
            Hue x Saturation Interaction
            {expanded.box3[1] && <p>
There was found a significant Hue x Saturation interaction, F(2,116) = 15.38, p &lt; .001, η2 = 0.21, 95% CI[0.10, 1.00]. 
<br></br><br></br>
Analysis of the Simple Main Effects showed a significant effect of Saturation on Blue Hue F(1,155.55) = 39.34, p &lt; .001. 
It shows that the lower the Saturation of Blue paintings is, the lower observed the participants’ Liking of a piece, and the higher Saturation of Blue paintings is, 
the higher the participants’ Liking (low Saturation M = 34.01, SD = 27.90 vs high Saturation M = 56.67, SD = 26.10).
<br></br><br></br>
Moreover, there was a significant effect of Saturation on Brown Hue F(1,155.55) = 33.75, p &lt; .001, (low Saturation M = 36.70, SD = 26.23 vs high Saturation M = 57.69, SD = 26.23). 
<br></br><br></br>
However, no significant effect of Saturation was found on the Yellow Hue (p &gt; .05) (see Figure 3.3.1).</p>}
          </li>
          <li onClick={() => handleToggle('box3', 2)}>
            Hue x Brightness Interaction
            {expanded.box3[2] && <p>The Hue × Brightness interaction was non-significant, F(1,58) = 0.70, p = .500, η2 = 0.01, 95% CI[0.00, 1.00].</p>}
          </li>
          <li onClick={() => handleToggle('box3', 3)}>
            Saturation x Brightness Interaction
            {expanded.box3[3] && <p>The Saturation × Brightness interaction was non-significant, F(1,58) = 0, p = .983, η2 &lt; 0.01, 95% CI[0.00, 1.00].
              </p>}
          </li>
          <li onClick={() => handleToggle('box3', 4)}>
            Hue x Saturation x Brightness Interaction
            {expanded.box3[4] && <p>
Critically, there was a significant three-way interaction, F(2,116) = 5.68, p = .004, η2 = 0.09, 95% CI[0.02, 1.00].
To explore the three-way interaction, three 2 (Saturation) × 2 (Brightness) ANOVAs were conducted—one using the data for Blue Hue only, 
second using the data for the Yellow Hue only and the third one using data for the Brown Hue only.
<br></br><br></br>
For the first ANOVA on the Blue Hue data, there was no significant interaction, F(1,58) = 0.27, p = .606.
<br></br><br></br>
For the second ANOVA on the Yellow Hue data, there was no significant interaction, F(1,58) = 3.57, p = .064.
<br></br><br></br>
Only the third ANOVA on the Brown Hue data showed a significant interaction, F(1,58) = 6.30, p = .015.
<br></br><br></br>
At a high and low level of Saturation the simple main effect of Brightness was found non-significant (p &gt; .05).
However, at a low level of Brightness the simple main effect of Saturation was found significant F(1,110.85)= 8.52, p = .004. 
<br></br><br></br>
Participants when looking at low Brightness high Saturation paintings liked Brown Hue paintings more (M = 58.5, SD = 28.1), 
and when looking at low Saturation paintings, they liked the Brown Hue paintings less (M = 43.8, SD = 27.5) (see Figure 3.3.1).
<br></br><br></br>
Also, at a high level of Brightness the simple main effect of Saturation was found significant F(1,110.85)= 36.77, p &lt; .001. 
Participants when looking at high Brightness high Saturation paintings liked them more (M = 58.0, SD = 26.7), and when looking at 
low Saturation paintings, they liked the paintings less (M = 43.3, SD =29.6).

              </p>}
          </li>
        </ul>
      </div>
    </div>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
  </div>
  );
};

export default Results;
