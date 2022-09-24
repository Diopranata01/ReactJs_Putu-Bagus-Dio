import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage, AboutPage, ErrPage
} from './pages'

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <div className='isiBody container'>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='about' element={<AboutPage></AboutPage>}></Route>
          <Route path='*' element={<ErrPage/>}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
