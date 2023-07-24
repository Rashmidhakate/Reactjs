import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) =>{
    setAlert({
      msg: msg,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    },1500)
  }

  const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = "grey";
        showAlert("Dark Mode Enable",'success')
        document.title = 'TextUtils - Dark Mode';
      }else{
        setMode('light');
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode Enable",'success')
        document.title = 'TextUtils - Light Mode';
      }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar mode = {mode} toggleMode = {toggleMode} />
      <div className="container">
        <Alert showAlert={alert}/>
      </div>
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter the text" mode = {mode} showAlert={showAlert}/>}  />
        <Route exact path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
