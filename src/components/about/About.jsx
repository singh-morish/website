import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { TbFolders } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="my images" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <p className="about__icon">
                <TbAward />
              </p>

              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <p className="about__icon">
                <FiUsers />
              </p>

              <h5>Clients</h5>
              <small>Started Fresh</small>
            </article>

            <article className="about__card">
              <p className="about__icon">
                <TbFolders />
              </p>
              <h5>Projects</h5>
              <small>20+ Completed project</small>
            </article>
          </div>

          <p>
          Dynamic fresher with a passion for Full Stack development and programming language. With an impressive track record of 20+ successfully completed projects, I expertise in Full Stack Web Development and also various programming language. Eager to take on new challenges and deliver innovative solutions.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
