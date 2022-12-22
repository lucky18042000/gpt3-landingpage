import React from "react";
import "./header.css";
import image from "../../assets/ai.png";
import people from '../../assets/people.png'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2 className="header-content-heading">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h2>
        <p className="header-content-desc">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form className="header-form">
          <input className="header-form-input" type="email" id="email" placeholder="Your Email Address" required></input>
          <button className="header-form-button" type="button">Get Started</button>
        </form>
        <div className="header-people">
          <img src={people}alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header-img">
        <img src={image} alt="AI Image" />
      </div>
    </div>
  );
};

export default Header;
