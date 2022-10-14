import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img
                src="https://avatars.githubusercontent.com/u/105644684?v=4"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Abhishek Upadhyay </span> from{" "}
                <span className="different"> Pune, Maharashtra</span>. I have
                completed my Degree in Bachelor of Mechanical Engineering from
                Pune University.
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Technology Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricket Enthusiast{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
