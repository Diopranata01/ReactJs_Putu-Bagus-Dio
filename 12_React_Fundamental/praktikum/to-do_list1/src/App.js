import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import './App.css'
import {
  IniNavbar, IniBody
} from './components';

function App() {
  return (
    <div className="App">
      <IniNavbar/>
      <IniBody/>
    </div>
  );
}

export default App;