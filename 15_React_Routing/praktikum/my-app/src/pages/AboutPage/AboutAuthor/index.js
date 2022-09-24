import React from "react";
import "./AboutAuthor.css";
import { IniFooter, IniNavbar2 } from "../../../component";

const AboutAuthor = () => {
  return (
    <>
      <div className="componen2">
        <div className="header-aboutauthor">
          <IniNavbar2 />
        </div>
        <div className="body-aboutauthor aboutauthor">
          <div className="row g-0">
            <div className="col-8">
              <h1>About The Author</h1>
              <p>
                This app was developed by someone, a self-taught web developer and technical writer.
              </p>
            </div>
            <div className="col-4">{/* isi konten */}</div>
            <IniFooter/>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAuthor;
