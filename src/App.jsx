import { useState } from 'react'
import  { CV } from "./components/CV/Cv"
import './App.css'
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Education from "./components/Education/Education"
import Experience from "./components/Experience/Experience"
import More from "./components/More/More"

const { hero, education, experience, languages, habilities, volunteer } = CV;

const App = () => {
  const [showEducation, setShowEducation] = useState(true);
  return (
    <div className="App">
        <Hero hero={hero} />
        <About hero={hero} />
        <button 
        className="custom-btn btn-4"
        onClick={() => setShowEducation(true)}
        >Education</button>
        <button 
        className="custom-btn btn-4"
        onClick={() => setShowEducation(false)}
        >Experience</button>
        <div>
          {showEducation ? (
            <Education education={education}/>
          ) : (
            <Experience experience={experience}/>
          )}
        </div>
	      <More
        languages={languages}
        habilities={habilities}
        volunteer={volunteer}
	      />
    </div>
  )
}

export default App
