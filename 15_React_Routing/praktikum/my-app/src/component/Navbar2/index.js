import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css";

const IniNavbar2 = () => {
  return (
    <>  
          <div className="header2">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid container2">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navbar2">
                    {/* <FontAwesomeIcon icon={faXmark} onClick={hideMenu()}/> */}
                    <li className="nav-item nav1">
                        <Link className="nav-link active" aria-current="page" to="/">
                        Home
                        </Link>
                    </li>
                    <li className="nav-item nav2">
                        <Link className="nav-link active" to="/about/about-app">
                        About App
                        </Link>
                    </li>
                    <li className="nav-item nav2">
                        <Link className="nav-link active" to="/about/about-author">
                        About Author
                        </Link>
                    </li>
                    <li className="nav-item nav2">
                        <Link className="nav-link nav-link-btn active" to="/about/back">
                            <FontAwesomeIcon icon={faArrowLeft} className="fa-2md"/> Go Back
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

export default IniNavbar2;
