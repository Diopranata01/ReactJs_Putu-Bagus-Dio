import React, { useEffect, useState } from "react";
import "./../../style.css";
import { Contact } from "../../component/Contact";
import { Footer } from "../../component/Footer";
import myImage from "../../img/tom-podmore-l7qVmvCNtpM-unsplash.jpg";
import Asset_10 from "../../img/1x/Asset_10.svg";
import Asset_11 from "../../img/1x/Asset_11.svg";
import Asset_12 from "../../img/1x/Asset_12.svg";
import Asset_13 from "../../img/1x/Asset_13.svg";

export const Homepage = () => {
  const sun = document.getElementById("sun");
  const mountain_back = document.getElementById("mountain_back");
  const text = document.getElementById("text");
  const text2 = document.getElementById("text2");
  const btn = document.getElementById("btn");
  const header = document.getElementById("header");

  const [newData, setNewData] = useState({
    email: "",
    name: "",
    message: "",
  });

  console.log(newData);

  const onScroll = (event) => {
    const value = window.scrollY;
    sun.style.left = value * 0.5 + "px";
    mountain_back.style.marginTop = value * 0.2 + "px";
    mountain_back.style.marginTop = value * 0.2 + "px";
    text.style.marginTop = value * 1 + "px";
    text2.style.marginTop = value * 1 + "px";
    btn.style.marginTop = value * 2 + "px";
    header.style.top = value * 0.5 + "px";
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header id="header">
        <a href="#" class="logo">
          Logo
        </a>
        <ul>
          <li>
            <a href="#" class="active">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Link</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </header>
      <section>
        <img src={Asset_12} alt="" id="sun" />
        <img src={Asset_13} alt="" id="mountain_back" />
        <h2 id="text">Welcome To Our Website</h2>
        <p id="text2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quasi
          impedit qui consequuntur similique praesentium quos, nam in saepe
          veritatis dolores provident dolor a delectus tenetur veniam ipsam
          laudantium doloribus?
        </p>
        <a href="#" id="btn">
          Join Now
        </a>
        <img src={Asset_11} alt="" id="mountain_mid2" />
        <img src={Asset_10} alt="" id="mountain_mid1" />
      </section>
      <div className="body-sec row-md-12 d-grid gap-3">
        <div class="col mb-5 d-flex justify-content-between">
          <div className="col-6 p-5">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto culpa cumque mollitia, impedit adipisci animi molestias
              fugit odit maxime aliquid hic nam, deserunt exercitationem, quia
              est repudiandae saepe temporibus accusantium? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Vitae ea aliquam quae,
              perspiciatis, quaerat voluptas alias unde praesentium molestiae
              aliquid officia facilis? Consequatur, ipsam pariatur iure fuga
              veritatis molestias repudiandae.
            </p>
          </div>
          <div className="col-5 myimage shadow">
            <img src={myImage} className="rounded-3" />
          </div>
        </div>
        <Contact newData={newData} setNewData={setNewData} />
        <Footer />
      </div>
    </>
  );
};
