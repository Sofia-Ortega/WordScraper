import './App.css';
import Header from './components/Header'
import UserInput from "./components/Input/UserInput";
import Blurb from './components/Blurb'
import Words from './components/Words'
import React from 'react';


function App() {
  const [display, setDisplay] = React.useState(false);

  function changeDisplay() {
    setDisplay(!display);
  }



  return (
    <div className="App">
      <Header/>
      <Blurb/>
      <UserInput changeDisplay={changeDisplay}/>
      <Words display={display} />

    </div>
  );
}

export default App;
