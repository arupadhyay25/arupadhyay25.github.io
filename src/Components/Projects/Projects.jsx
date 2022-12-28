import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiHtml5,
  SiReactrouter,
  SiCss3,
  SiNpm,
  SiSlickpic,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
} from "react-icons/si";
import { DiBootstrap } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import MyFitnessPa_App_Clone from "./Images/MyFitnessPal App.JPG";
import betrix24 from "./Images/betrix24.jpg";
import DreamBaths from "./Images/DreamBaths.JPG";
import eligant from "./Images/eligant.JPG";
import InsightCentral from "./Images/Insight-Central.JPG";
import Insight from "./Images/Insight.png";

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
                <img src={Insight} alt="Mail Chimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>
                Insight-Central <br /> (Collaborative)
              </h2>
              <p>
                Insight-Central is an Blogging website where user can read and
                write posts in various categories.
              </p>
              <div>
                <SiNextdotjs />
                <SiMongodb />
                <SiExpress />
                <SiHtml5 />
                <SiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://insight-central.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arupadhyay25/Insight-Central"
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
                <img src={eligant} alt="Mail Chimp" />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>
                <br />
                Elegant.com
                <br />
                <br /> <h3>(Collaborative)</h3>
              </h2>
              <p>
                Elegant is an E-Commerce website that sells Unisex clothings and
                Accessories.
                <br />
              </p>
              <div>
                <FaReact />
                <IoLogoJavascript />
                <SiMongodb />
                <SiExpress />
                <SiHtml5 />
                <SiCss3 />
                <SiReactrouter />
              </div>
              <div>
                <a
                  href="https://itchy-nation-5605.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/arupadhyay25/itchy-nation-5605"
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
                <FaReact />
                <SiHtml5 />
                <SiExpress />
                <SiMongodb />
                <SiCss3 />
                <IoLogoJavascript />
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
        {/* ---------------4-------------------- */}
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
                <FaReact />
                <SiHtml5 />
                <SiCss3 />
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
      </div>
    </>
  );
};
