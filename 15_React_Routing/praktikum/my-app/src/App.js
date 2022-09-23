import React from 'react'
import './App.css'
import {
  IniNavbar, IniFooter
} from './component'
import {
  HomePage, AboutPage
} from './pages'

function App() {
  return (
    <div className="App container">
      <IniNavbar/>
      <div className='isiBody container'>
        <br/><br/><br/><br/>
          <header>
              <h1>todos</h1>
          </header>
          <HomePage/>
          {/* <AboutPage/> */}
          <IniFooter/>
      </div>
    </div>
  );
}

export default App;
