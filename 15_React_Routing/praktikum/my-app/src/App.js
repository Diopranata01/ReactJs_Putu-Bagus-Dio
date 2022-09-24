import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage, AboutPage, ErrPage, AboutAuthor
} from './pages'

function App() {

  const shouldRedirect = false;

  return (
    <BrowserRouter>
    <div className="App container">
      <div className='isiBody container'>
        <Routes>
          {/* <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='about' element={<AboutPage></AboutPage>}></Route>
          <Route path='about/about-app' element={<AboutPage></AboutPage>}></Route>
          <Route path='about/:slug' element={<AboutAuthor></AboutAuthor>}></Route>
          <Route path='*' element={<ErrPage/>}></Route> */}
          
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='about' element={<AboutPage></AboutPage>}></Route>
          <Route path='about/about-app' element={<AboutPage></AboutPage>}></Route>
          <Route path='about/:slug' element={<AboutAuthor></AboutAuthor>}></Route>
          <Route path='about/back' element={shouldRedirect ? (<Navigate replace to="/"/>):(<AboutPage/>)
          }></Route>
          <Route path='*' element={<ErrPage/>}></Route>
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
