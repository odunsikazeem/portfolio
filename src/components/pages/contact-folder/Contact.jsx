import React, { useRef, useState } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [ResponseText, setResponseText] = useState(" ");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p3hvjz6", "template_nacdham", form.current, {
        publicKey: "68lF4grWoT6CJYyeV",
      })
      .then(
        () => {
          setResponseText("Submitted");
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact">
      <div className="binder">
        <div className="column-1">
        <h1>Contact Me</h1>
          <div className="central">
            <h2>Get in touch</h2>
          </div>
          <div className="information">
            <div>
              <p>
                <strong>Email :</strong> odunsikazeem@gmail.com
              </p>
            </div>
            <div>
              <p>
                <strong>GitHub :</strong> https://github.com/odunsikazeem
              </p>
            </div>
          </div>
        </div>
        <div className="column-2">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Your Name" />
            <br />

            <input type="email" name="from_email" placeholder="Your Email" />
            <br />

            <textarea name="message" placeholder="Your Message here ..." />
            <br />
            {/* <input type="submit" value="Send" /> */}
            <button>Submit</button>
          </form>
          <p>{ResponseText}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
