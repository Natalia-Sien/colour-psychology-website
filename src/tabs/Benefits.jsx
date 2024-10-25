import React from 'react';
import './Home.css';


const Benefits = () => {
  return (
    <div className="introduction-container">
      <h1>Benefits of using art in psychology</h1>
      <div className="text-frame">
        <p>
        Research shows that engagement with visual art, either as an observer or initiator of creative
activity, can improve one’s mood and wellbeing (Staricoff & Loppert, 2003). Although many
speculate whether the benefits are due to art itself or to activity around art which makes it
beneficial for health, research proves that just the mere exposure to art can already make a
difference (Vickhoff, 2023). In the same way as admiring nature, only viewing art is an
aesthetic experience resulting in the experience of pleasure, and then in turn - reward
leading to increased positive affect (Mastandrea et al., 2019). The impact of art-based
interventions can be partially explained by dual coding theory of memory (Paivio, 1986). It
suggests that when the verbal and visual stimuli are encoded, they firstly are processed in
the short term memory, and then connected to already known information retrieved from the
long term memory, constituting a secondary appraisal. Therefore, if a participant sees a
painting of a certain colour and associates this colour with pleasurable things they saw in the
past, it can result in improved well-being.
        </p>
      </div>

      <div className="text-frame">
        <p>
        This positive effect of art has been widely researched. In their study, Drake, Eizayaga &
Wawrzynski (2023) split participants into two groups, one viewing art and the other creating
art. After inducing a sad mood, they found that both viewing and creating art had an equally
significant effect on reducing negative emotions. Also Cotter et al. (2022) found that both
looking at art and engaged looking at art raised the same benefits for well-being. However,
they also suggest that making art could be more powerful as it is a more immersive
experience. For example, it was found that when drawing and painting was used as a distraction 
from negative events and not as a way of expressing them, it significantly
improved participants mood, even in those who have no artistic background (Forkosh &
Drake, 2017; Diliberto-Macaluso & Stubblefield, 2015).
        </p>
      </div>

      <div className="text-frame">
        <p>
        Moreover, art was found to help both with cognitive functioning and improving the quality of
life of patients with various diseases and disabilities (Savazzi et al., 2020). The
interpretations of drawings in therapy changed across years from focusing on elements like
people and houses, to the focus on number of colours, accuracy and dominant colour (Kim,
2010). Knowledge about colour preferences and colour effect on emotional states is crucial
in designing art therapy, as therapists need to know how to effectively use colour to achieve
best results of a treatment (Tate & Allen, 1985). For example, art therapy using colour was
applied to improve levels of Purpose in Life of patients with post-stroke disability and their
caregivers and to eliminate negative thoughts and feelings (Kim & Kang, 2013). The
successful effect of the therapy was visible in participants' use of colour in describing their
feelings - from achromatic when upset to chromatic after completion of the therapy.
        </p>
      </div>

      <div className="text-frame">
        <p>
        When considering the benefits of art, it is important to give some attention to the settings in
which the art is viewed. Viewing art in the museum increased the enjoyment of art-works
significantly more than viewing in laboratory settings (Brieber et al., 2015), therefore should
be considered when planning different interventions. Camic & Chatterjee (2013) highlight the
role of museums and art galleries as valuable partners in enhancing public health,
suggesting that art plays an important role in the well-being enhancement.
However, also an online use of art can already provide some potential benefits to well being.
Tyack, Camic, Heron & Hulbert (2017) designed an intervention for patients with dementia
with the use of an online app presented on tablets. In the app participants were presented
with different works of art and asked to evaluate their levels of happiness, wellness and
interestedness before and after viewing art pieces. After two weeks the majority of
participants experienced improvement in well-being and pro-social behaviour.
        </p>
      </div>

      <div className="text-frame">
        <p>
        Knowing that art (shown either in-person or online) is such a powerful tool, the current study
aims to highlight its importance in both clinical and everyday settings and the significant
effects that art can potentially provide. However, not all arts can be equally beneficial and the
more complex investigation of certain art elements (like line, form and colour) can contribute
to raising the best possible effects of art interventions.
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

export default Benefits;
