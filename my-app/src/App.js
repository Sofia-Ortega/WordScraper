import './App.css';
import Header from './components/Header'
import UserInput from "./components/Input/UserInput";
import Blurb from './components/Blurb'

function App() {


  return (
    <div className="App">
      <Header/>
      <Blurb/>
      <UserInput/>

    </div>
  );
}

export default App;
