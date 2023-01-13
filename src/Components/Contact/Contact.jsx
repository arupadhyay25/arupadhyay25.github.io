import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <span style={{ textAlign: "center" }}>
            <a
              href="https://www.linkedin.com/in/abhishek-upadhyay-174710246/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" />
            </a>
            <br />
            <label className="label">Linkedin</label>
          </span>
          <span style={{ textAlign: "center", display: "grid" }}>
            <a
              href="https://github.com/arupadhyay25"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" />
            </a>
            <label className="label">Github</label>
          </span>
          <span style={{ textAlign: "center", display: "grid" }}>
            <a
              href="mailto:arupadhyay25@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" />
            </a>
            <label className="label">G-Mail</label>
          </span>
          <span style={{ textAlign: "center", display: "grid" }}>
            <a
              href="https://www.instagram.com/abhi_upadhyay____/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram className="twitter" />
            </a>
            <label className="label">InstaGram</label>
          </span>
          <span style={{ textAlign: "center", display: "grid" }}>
            <a href="tel:+919637162370" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" />
            </a>
            <label className="label">+91 9637162370</label>
          </span>
        </div>
      </div>
    </>
  );
};
