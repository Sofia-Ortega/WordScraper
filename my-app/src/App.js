import React from 'react';
import Axios from "axios";
import './App.css';
import Header from './components/Header'
import UserInput from "./components/Input/UserInput";
import Blurb from './components/Blurb'
import Words from './components/Scraper/Words'




function App() {
  const [display, setDisplay] = React.useState(false);
  const [data, setData] = React.useState('');

  function changeDisplay() {
    setDisplay(!display);
  }

  function getWords() {
    Axios({
      method: "GET",
      url: "http://localhost:9000/hello",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      setData(res.data.message);
    });
  }


  return (
    <div className="App">
      <Header/>
      <Blurb/>
      <UserInput changeDisplay={changeDisplay}/>
      <Words display={display} getWords={getWords} data={data} />




    </div>
  );
}

export default App;
