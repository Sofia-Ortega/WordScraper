import './App.css';
import Header from './components/Header'
import UserInput from "./components/Input/UserInput";
import Blurb from './components/Blurb'
import Words from './components/Words'
import React from 'react';
import Axios from 'axios';


function App() {
  // const [display, setDisplay] = React.useState(false);
  //
  // function changeDisplay() {
  //   setDisplay(!display);
  // }

  Axios({
    method: "GET",
    url: "http://localhost:9000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message)
  });



  return (
    <div className="App">
      {/*<Header/>*/}
      {/*<Blurb/>*/}
      {/*<UserInput changeDisplay={changeDisplay}/>*/}
      {/*<Words display={display} />*/}
      <p>Testing 1 2</p>


    </div>
  );
}

export default App;
