import React from "react";
import "./AboutPage.css";
import { IniFooter, IniNavbar2 } from "../../../component";

const AboutPage = () => {
  return (
    <>
      <div className="componen">
        <div className="header-aboutpage">
          <IniNavbar2 />
        </div>
        <div className="body-aboutpage aboutpage">
          <div className="row g-0">
            <div className="col-8">
              <h1>About The App</h1>
              <p>
                In this app, you can add, delete, submit and edit items. To edit
                items, simply double click on it, press the enter key to
                resubmit. This app will persist your data in the browser local
                storage. So whetter you reload, close your app or reopened it,
                you sill have access to your todos items.
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

export default AboutPage;
