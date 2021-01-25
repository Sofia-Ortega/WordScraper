import './App.css';
import Header from './components/Header'
import UserInput from "./components/Input/UserInput";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <Header/>
      <UserInput handleChange={handleChange}/>
    </div>
  );
}

export default App;
