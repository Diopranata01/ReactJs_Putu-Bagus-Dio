import {React, useRef }from "react";
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    Link
  } from 'react-router-dom'
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const IniNavbar = () => {
    
    const navBar = useRef();

    const navBarShow = () =>{
        navBar.current.classList.toggle("res_nav")
    }

  return (
    <>
        <div className="header">
            <div className='btn nav-btn' onClick={navBarShow}>
                <FontAwesomeIcon icon={faBars} className="fa-2xl"/>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark" ref={navBar}>
                <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <div className="btn nav-btn nav-close-btn" onClick={navBarShow}>
                        <FontAwesomeIcon icon={faXmark} className="fa-2xl"/>
                    </div>
                    {/* <FontAwesomeIcon icon={faXmark} onClick={hideMenu()}/> */}
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/about">
                        About
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                </li> */}
                    </ul>
                </div>
                </div>
            </nav>
            
        </div>
    </>
  );
};

export default IniNavbar;