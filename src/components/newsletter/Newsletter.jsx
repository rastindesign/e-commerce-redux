import React from "react";
import "./Newsletter.css";
import { IoMdSend } from "react-icons/io";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="newsletter-title">Newsletter</h1>
      <div className="newsletter-desc">
        What's fresh and New: Updetes you Don't Want to Miss
      </div>
      <div className="input-container">
        <input className="newsletter-input" placeholder="Your Email" />
        <button className="newsletter-button">
          <IoMdSend className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
