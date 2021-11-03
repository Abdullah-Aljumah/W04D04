import React from "react";
import "./style.css";

//RiRadioButtonLine
const Contact = () => {
  return (
    <div className="contact">
      <div>
        <h1>By phone</h1>
        <p>+966553443668</p>
      </div>
      <div>
        <h1>By Email</h1>
        <p>Abdullah.Ali@Example.com</p>
      </div>
      <div>
        <h1>By Live Chat</h1>
        <button className="buttons1">Live Chat!</button>
      </div>
    </div>
  );
};

export default Contact;
