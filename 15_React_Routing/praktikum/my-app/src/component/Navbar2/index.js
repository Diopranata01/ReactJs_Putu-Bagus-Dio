import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./index.css";

const IniNavbar2 = () => {
  return (
    <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
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
            
    </>
  );
};

export default IniNavbar2;
