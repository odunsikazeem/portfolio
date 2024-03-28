import React, { useRef, useState } from "react";
import "./style.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [ResponseText, setResponseText] = useState(" ");
   const [input, setInput] = useState({
   from_name: "",
   from_email: "",
   message: "",
   });


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
          setInput ({
            from_name: "",
            from_email: "",
            message: "",
          });

          setTimeout(() => {
            setResponseText("")
          }, 1000);

        },
        (error) => {
          return ("FAILED...", error.text);
        }
      );
  };

  const inputChange= (e) => {
    const { name, value } = e.target;
    setInput ((prevValue) => ({
      ...prevValue,
      [name] : value
    }));
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
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={input.from_name} onChange={inputChange}
            />
            <br />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={input.from_email} onChange={inputChange}
            />
            <br />

            <textarea
              name="message"
              placeholder="Your Message here ..."
              value={input.message} onChange={inputChange}
            />
            <br />
            <button>Submit</button>
          </form>
          <p className="response">{ResponseText}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
