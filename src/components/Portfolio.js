import React, { useState } from "react";
import Project from "./Project";

function Portfolio() {
  const [projects, setProjects] = useState([
    {
      name: "goRecette",
      link: "https://lf56.github.io/goRecette/",
      repo: "https://github.com/Clos86/goRecette",
      image: "goRecette.png",
    },
    {
      name: "README Generator",
      link: "https://drive.google.com/file/d/1gef8zoK_zDXlTQzusk6SnymQBEeNpvEq/view",
      repo: "https://github.com/Clos86/Vazquez-readme-generator",
      image: "README.jpg",
    },
    {
      name: "SafeSpot",
      link: "https://safespotblog.herokuapp.com/",
      repo: "https://github.com/Clos86/SafeSpot",
      image: "safespot.jpg",
    },
    {
      name: "devFinder",
      link: "https://floating-atoll-26715.herokuapp.com/",
      repo: "https://github.com/Clos86/finalPiece",
      image: "devFinder.jpg",
    },    
  ]);

  return (
    <div className="flex flex-wrap justify-center">
      {projects.map((project) => (
        <Project project={project} key={project.name} />
      ))}
    </div>
  );
}

export default Portfolio;
