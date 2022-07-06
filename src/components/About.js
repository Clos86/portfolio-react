import React from "react";

function About() {
  return (
    <div className="columns-2 flex flex-wrap justify-center">
      <img
        src={require("../assets/img/headshot.jpg")}
        alt="headshot"
        className="w-1/2"
      /> 
      <p className="text-center text-lg">
        Welcome! My name is Carlos Vazquez and I'm a recent graduate of the UCF Coding Boot Camp.
        I have obtain the tools and knowledge to work on front-end and back-end jobs.
        Along with those skills I also have an art education degree, can work in a team or independently, and have a love for problem solving.  
      </p>
    </div>
  );
}

export default About;
