import React from 'react';

const Findings = () => {
  return (
    <div className="introduction-container">
      <h1>Key findings</h1>

      <br></br>
      <br></br>

      <div className="finding-item">
        <div className="finding-number">1</div>
        <div className="text-frame">
        <p>
        In accordance with the first hypothesis, the study found a rise and fall in arousal when participants were presented with high- and low-saturated paintings, respectively.
Only saturation induced a significant main effect, which indicates that it affected participants irrespectively of hue and brightness. This finding supports previous studies on the effect of saturation on emotions (Kwallek et al., 1996; Wright & Rainwater, 1962; Zielinski, 2016). When analysing the effect of saturation together with hue, these two have a significant effect on arousal only for yellow hue. When considering it also with brightness, only at high brightness for yellow paintings, the high saturation elicited higher arousal than low saturation. Interestingly, the same effect for brown hue was visible only at low brightness. Considering this finding in the light of the past research on hue, yellow and brown as having longer wavelengths than blue should indeed be more arousing (Nakshian, 1964). That is also in line with the studies on hue where levels of brightness and saturation were controlled (Suk & Irtel, 2010).
        </p>
      </div>
      </div>

      <div className="finding-item">
        <div className="finding-number">2</div>
        <div className="text-frame">
        <p>
        Consistent with the second hypothesis, the study found a rise and fall in valence when presenting participants with high- and low-brightness paintings, respectively. The significant main effect of brightness indicates that it affected participants irrespectively of hue and saturation. This finding supports the generally known association in research between brightness and positivity (Specker et al., 2018; Lakens et al., 2013).
When analysing the effect of brightness together with hue, the significant effect of hue on brightness was found for blue and brown hues. That is, when brown and blue paintings were brighter, they elicited higher valence. For the yellow hue, the effect of brightness was non-significant. Therefore, it can be concluded that as suggested tin past research, yellow is more likely to cause higher valence irrespectively of its brightness, and the same effect of other hues is dependent on brightness of a colour (Jonauskaite et al., 2019)
When considering the effect also with saturation, only at high saturation and only for brown hue, high brightness elicited higher valence than low brightness, highlighting the possible positive influence of high saturation, even on hues which generally have negative associations (Wilms & Oberfeld, 2017).
        </p>
      </div>
      </div>

      <div className="finding-item">
        <div className="finding-number">3</div>
        <div className="text-frame">
        <p>
        Also the third hypothesis, considering the influence of hue, got partially confirmed. It was hypothesised that blue and brown will elicit lower valence and lower arousal, and yellow will elicit higher valence and higher arousal. The main effect of hue on valence was found to be significant and in support of the hypothesis, yellow hue elicited considerably higher valence than blue and brown respectively when controlling for other emotion dimensions. As mentioned before, yellow is more likely to induce positive emotion, as it is generally associated with more positive concepts than blue and brown (Palmer and Schloss, 2010). Across different colours, yellow is usually the most commonly associated with joy and overall, good mood.
However, the main effect of hue on arousal was found to be non significant. When considering arousal, the effects of hues were subject to levels of saturation. These results confirm the previous findings from Wright & Rainwater (1962) or Kwallek et al. (1996) and more recent research - Zielinski (2016).
        </p>
      </div>
      </div>

      <div className="finding-item">
        <div className="finding-number">4</div>
        <div className="text-frame">
        <p>
        The fourth hypothesis was that paintings that are liked more will also evoke more positive emotions. The study found a positive correlation between valence and liking, indicating that more liked paintings also elicited higher valence, confirming the hypothesis. The findings support previous research, for example see Palmer and Schloss (2010).
In more detail, the findings show that the most liked colour was yellow, followed by brown and blue. That contradicts some previous studies investigating the likeability of colour, where the most commonly liked colour is blue, even cross-culturally (Jonauskaite et al., 2019). In line with the past research, participants also liked more high Saturated paintings (Gao et al., 2007). However, there was no difference in liking between low and high brightness. Also, the arousal and liking were found to be weakly negatively correlated. It seems like when participants experienced too much arousal, they did not like the paintings much.
        </p>
      </div>
      </div>

    </div>
  );
};

export default Findings;