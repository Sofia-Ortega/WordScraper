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
  const [count, setCount] = React.useState(0);

  function changeDisplay() {
    setDisplay(!display);
  }

  function getWords() {
    Axios({
      method: "GET",
      url: "http://localhost:9000/test",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      setData(res.data.french);
      setCount(count + 1);
      console.log("Got from database: ", count)
      console.log(res.data.french);
    });
  }


  return (
    <div className="App">
      <Header/>
      <Blurb/>
      <UserInput changeDisplay={changeDisplay} getWords={getWords}/>
      <Words display={display} data={data} />

    </div>
  );
}

export default App;
