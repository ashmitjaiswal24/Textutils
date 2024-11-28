
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [currmode,setDarkMode]=useState("dark");
  const[alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode=()=>{
    if(currmode === "dark"){
      setDarkMode("light");
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("The dark mode has been enabled","success");

    }else{
      setDarkMode("dark");
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("The light mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
  <Navbar title="Textutils" about="About" mode={currmode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container">
    <Routes>
      <Route exact path="/about" element={<About />} />
      <Route exact path="/" element={
        <Textform 
          showAlert={showAlert} 
          heading="Enter the text to manipulate" 
          mode={currmode}
        />
      } />
    </Routes>
  </div>
</Router>
    </>
  );
}

export default App;
