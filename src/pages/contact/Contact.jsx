import "./contact-styles.css";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  return (
    <main className="main-container">
      <Navbar />
      <section className="container-contact">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
            <span className="bg-text">Contact</span>
          </h2>
        </div>

        <section className="contact-details">
          <div>
            <h3 className="contact-title-details">Details:</h3>
            <div className="contact-info">
              <GoLocation />
              <p className="contact-question">Location</p>
              <p className="contact-answer">: &nbsp; Vancouver - Canada</p>
            </div>
            <div className="contact-info">
              <HiOutlineMail />
              <p className="contact-question">Email</p>
              <p className="contact-answer">: &nbsp; alzbarbosa@gmail.com</p>
            </div>
            <div className="contact-info">
              <BiWorld />
              <p className="contact-question">Languages</p>
              <p className="contact-answer">: &nbsp; English and Portuguese</p>
            </div>
          </div>
          <div className="container-icons-contact">
            <a href="https://www.linkedin.com/in/andre-barbosa-b4933114a/">
              <BsLinkedin className="icon-contact" />
            </a>
            <a href="https://github.com/alzbarbosa">
              <BsGithub className="icon-contact" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100022024270844">
              <BsFacebook className="icon-contact" />
            </a>
            <a href="https://codepen.io/aquarius83">
              <FaCodepen className="icon-contact" />
            </a>
          </div>
        </section>
        <section>
          <h3 className="footer-contact">2023 Andre Barbosa</h3>
        </section>
      </section>
    </main>
  );
};

export default Contact;
