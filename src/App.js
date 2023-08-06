import { useState } from 'react' // to use state hook

import logo from './logo.svg';
import WyattProf from './WyattProf.jpg';
import WyattChairlift from './wyattchairlift.jpg';

import './App.css'; //colors: https://www.color-hex.com/color-palette/7018
import Header from './Header.js';
import JobExperience from './JobExperience';
import Education from './Education';
import Extracurr from './Extracurr';


const Button = ({action, text}) => {
  return (
    <button onClick={action}>
      <p>{text}</p>
    </button>
  )
}

const App = () => {
  
  const [reveal, setReveal] = useState(false);
  function handleReveal () {
    setReveal(!reveal);
  }
  
  return (
    <div className="App">
      <Header />
      <p>I am a computer science major at Boston University! Clearly I am still learning...</p>
      <Button action={handleReveal} text="hide/reveal"/>
      <p>Reveal's value: {reveal.toString()}</p>
      {reveal ? <p>I miss my friends</p> : <br />}
      <hr />
      <JobExperience />
      <hr />
      <Education />
      <hr />
      <Extracurr />
    </div>
  );
}

export default App;