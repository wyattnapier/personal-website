import { useState } from 'react' // to use state hook

import logo from './logo.svg';
import WyattProf from './WyattProf.jpg';
import WyattChairlift from './wyattchairlift.jpg';

import './App.css'; //colors: https://www.color-hex.com/color-palette/7018
import Header from './Header.js';


const Button = ({action, text}) => {
  console.log('derp');
  //need display function to show feedback values
  return (
    <button onClick={action}>
      <p>{text}</p>
    </button>
  )
}


const DisplayVal = ({val}) => {
  console.log(val)
  return (
    <h3>{val}</h3>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState(0);
  const incrementFeedback = () => { setFeedback(feedback + 1) }

  const [reveal, setReveal] = useState(false);
  function handleReveal () {
    setReveal(!reveal);
  }
  // setReveal = useState(true);
  console.log("OG reveal: ", reveal);
  
  return (
    <div className="App">
      <Header />
      <p>I am a computer science major at Boston University! Clearly I am still learning...</p>
      <Button action={handleReveal} text="hide/reveal"/>
      <p>Reveal's value: {reveal.toString()}</p>
      {reveal ? <p>I miss my friends</p> : <br />}
    </div>
  );
}

export default App;

/*
trash HTML
<SecretNote bool={reveal} note="I miss my friends!" />

<div className="HeaderRow">
        <span>  
          <h2>This is me!</h2> 
          <p>some more sample text to double check, but let's say it was really long</p>  
        </span>
        <p>I love playing around</p>
        <img src={WyattTree} className="App-WyattTree" alt="Wyatt Napier" />
      </div>



      <p>the boolean value is: {reveal}</p>
      <DisplayVal val={reveal} />

      <Button action={incrementFeedback} text={"like"} />
      <DisplayVal val={feedback}/>
      {reveal && <p>I miss my friends</p>}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>


*/
