import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiHtml5,
  SiReactrouter,
  SiCss3,
  SiNpm,
  SiSlickpic,
} from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import MyFitnessPa_App_Clone from "./MyFitnessPal App.JPG";
import betrix24 from "./betrix24.jpg";
import bellavita from "./bellavita.jpg";
import DreamBaths from "./DreamBaths.JPG";

export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        {/* ---------------1-------------------- */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={DreamBaths} alt="Mail Chimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>
                <br />
                DreamBaths App E-Commerce
                <br /> (Collaborative)
              </h2>
              <p>
                DreamBaths is an E-Commerce website that sells personal care,
                beauty and Gifting products.
                <br />
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <FaReact />
                <IoLogoJavascript />
                <SiReactrouter />
                <SiNpm />
                <SiSlickpic />
              </div>
              <div>
                <a
                  href="https://loyal-horse-6020-a7ac.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arupadhyay25/DreamBaths-E-Commerce-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------2-------------------- */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={MyFitnessPa_App_Clone} alt="Mail Chimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>
                MyFitnessPal App Clone <br /> (Individual)
              </h2>
              <p>
                Clone of the popular website that is a Calorie and macros
                tracking Website help to maintain weight Goals such as Fat,
                Carbs, and Protein.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <FaReact />
                <IoLogoJavascript />
                <SiReactrouter />
                <SiNpm />
              </div>
              <div>
                <a
                  href="https://myfitnesspalreactproject.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arupadhyay25/venomous-plough-7848"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------3-------------------- */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img src={betrix24} alt="Mail Chimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>
                Betrix24 App Clone <br /> (Collaborative)
              </h2>
              <p>
                Clone of the popular website that is an all-in-one free platform
                to manage your team.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
                <DiBootstrap />
              </div>
              <div>
                <a
                  href="https://betrix24.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arupadhyay25/evil-jellyfish-2990"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
