import React from 'react';
import selfImage from "../../assets/images/headshot.JPG";

const About = () => {
  return (
    <section>
      <h2>About Me</h2>    
    <div id="about-me" className="me">      
      <img src={selfImage} alt="My headshot" />
    </div>
    <div>
    <p>
      Welcome! My name is Carlos Vazquez and I'm currently a student in the UCF Coding Boot Camp.
      By the end of the course I will have the tools and knowledge to work on front-end and back-end jobs.
      Along with those skills I also have an art education degree, can work in a team or independently, and have a love for problem solving.  
    </p>
    </div>
    </section>
  );
};

export default About;