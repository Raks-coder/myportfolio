import "./Contact.css";
import linkedin from "../../img/linkedin.jpg";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_phm34ts",
        "template_mctz9h7",
        formRef.current,
        "user_QweW2qRg1YL5xugYWUR6z"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={linkedin} alt="" className="c-icon" />
              <a href="https://www.linkedin.com/in/rakshit-malhotra-849620169/">Linkedin</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              rakshitdmi@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Planet Earth
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Want to reach out to me for something important?</b> Get in touch.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" required="true" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" required="true"/>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" required="true" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" required="true"/>
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;