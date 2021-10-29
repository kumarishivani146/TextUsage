//import logo from './logo.svg';
import { useState } from 'react/cjs/react.development';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/
function App() {
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode("dark");
      document.body.style.backgroundColor='#041a30';
      document.body.style.color='white';
      showAlert("Dark mode enabled","success");
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor='white';
      document.body.style.color='#041a30';
      showAlert("Light mode enabled","success");
    }
  }
  function letse(x) {
    document.body.style.backgroundColor=x;
  }
  const [mode,setMode]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
    {/*<Router>*/}
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} bgcol={letse}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/*<Switch>*/}
          {/*<Route eaxt path="/about">*/}
            {/*<About mode={mode}/>*/}
          {/*</Route>*/}
          {/*<Route eaxt path="/">*/}
            <TextForm heading="Enter the text to anlyse:" mode={mode} showAlert={showAlert}/>
         {/* </Route>*/}
        {/*</Switch>*/}
      </div>
      {/*<About/>*/}
   {/* </Router>*/}
    </>
  );
}

export default App;
