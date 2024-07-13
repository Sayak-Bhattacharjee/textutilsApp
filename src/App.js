// import logo from './logo.svg';
import './App.css';
import Alert from './component/Alert';
import About from './component/About';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const [themeStyle, setThemeStyle] = useState({
    backgroundColor: "rgb(42 42 127)",
    color: "white"
  })
  const changeThemeStyle = () => {
    if (mode === 'redTheme') {
      setThemeStyle({ backgroundColor: "#9a2530", color: "white" });
    } else if (mode === 'greenTheme') {
      setThemeStyle({ backgroundColor: "#6aad6a", color: "black" })
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.getElementById('root').style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    } else {
      setMode('dark');
      document.getElementById('root').style.backgroundColor = '#141454';
      showAlert("Dark mode has been enabled", "success");
    }
  }
  const redTheme = () => {
    setMode("redTheme");
    document.getElementById('root').style.backgroundColor = '#9a2530';
    changeThemeStyle()
    showAlert("Red Theme mode has been enabled", "success");
  }
  const greenTheme = () => {
    setMode("greenTheme");
    document.getElementById('root').style.backgroundColor = '#6aad6a';
    changeThemeStyle()
    showAlert("Green Theme mode has been enabled", "success");
  }
  return (
    <>
      <Router>
        <Alert mode={mode} alert={alert} />
        <Navbar title="Text Utilities" secondLi="Home" thirdLi="About Us" mode={mode} toggleMode={toggleMode}
          redTheme={redTheme} greenTheme={greenTheme} />
        <div className="container">
          {/* <Textarea header="Enter the text to analyze" mode={mode} /> */}
          {/* <About /> */}
        </div>
        <Routes>
          <Route exact path='/About' element={ <About/>}>
          </Route>
          <Route exact path='/' element={<Textarea header="Enter the text to analyze" mode={mode} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
