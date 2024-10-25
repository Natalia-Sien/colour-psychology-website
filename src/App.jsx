import React, { useState } from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import './components/NavBar.css';
import './App.css';
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Methods from './pages/Methods';
import Results from './pages/Results';
import Discussion from './pages/Discussion';
import Myself from './pages/Myself';
import Footer from './components/Footer';

import Characteristics from './tabs/Characteristics';
import Effects from './tabs/Effects';
import Benefits from './tabs/Benefits';
import Study from './tabs/Study';

import Overview from './tabs/Overview';
import Paintings from './tabs/Paintings';
import Questionnaire from './tabs/Questionnaire';

import Graphs from './tabs/Graphs';

import Findings from './tabs/Findings';
import Implications from './tabs/Implications';
import Future from './tabs/Future';


function App() {
  const [count, setCount] = useState(0); 

  return (
    <Router>
      <div className="App">
        
        <NavBar />
        
        <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/characteristics" element={<Characteristics />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/study" element={<Study />} />

          <Route path="/methods" element={<Methods />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/questionnaire" element={<Questionnaire />} />


          <Route path="/results" element={<Results />} />
          <Route path="/graphs" element={<Graphs />} />

          <Route path="/discussion" element={<Discussion />} />
          <Route path="/findings" element={<Findings />} />
          <Route path="/implications" element={<Implications />} />
          <Route path="/future" element={<Future />} />

          <Route path="/myself" element={<Myself />} />
         
        </Routes>
        </div>

        <Footer /> 
        
      </div>
    </Router>
  );
}

export default App;
