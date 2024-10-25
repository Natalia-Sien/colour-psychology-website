import React from 'react';
import './Home.css'; 

const Questionnaire = () => {
  const pdfUrl = "https://lancasteruni.eu.qualtrics.com/Q/EditSection/Blocks/Ajax/GetSurveyPrintPreview?ContextSurveyID=SV_1zdVik6EsvmUBx4&ContextLibraryID=UR_03cgdE7FTwD3du6";
  
  return (
    <div className="questionnaire-container">
      <h1 className="questionnaire-title">Survey PDF Preview</h1>
      <iframe
        src={pdfUrl}
        title="PDF Preview"
        className="pdf-iframe"
      />
    </div>
  );
};

export default Questionnaire;
