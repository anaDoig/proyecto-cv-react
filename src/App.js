import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { Hero, NavBar, About, Education, Experience, More, Footer } from './components';
import { CV } from './CV/CV';

const { hero, about, education, experience, languages, skills, more } = CV;

function App() {
  const [showEducation, setEducation] = useState(true);

  return (
    <div className="App">
      <HashRouter>
        <NavBar></NavBar>
      </HashRouter>
      <Hero hero={hero}></Hero>
      <About about={about}></About>

      <section className='section education-experience' id="education-experience">
        <div className='button-container'>
          <button className='' onClick={() => setEducation(true)}>Formación</button>
          <button className='' onClick={() => setEducation(false)}>Experiencia laboral</button>
        </div>
        
        {showEducation ? (
          <Education education={education}></Education>
        ) : (
          <Experience experience={experience}></Experience>
        )}
      </section>

      <More
        languages={languages}
        skills={skills}
        more={more}
      ></More>

      <Footer></Footer>
    </div>
  );
}

export default App;
