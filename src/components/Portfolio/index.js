import React, { useState } from "react";
import Project from "./Project";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      name: "goRecette",
      link: "https://lf56.github.io/goRecette/",
      repo: "https://github.com/Clos86/goRecette",
      image: "goRecette.jpg",
    },
    {
      name: "README Gennerator",
      link: "https://drive.google.com/file/d/1gef8zoK_zDXlTQzusk6SnymQBEeNpvEq/view",
      repo: "https://github.com/Clos86/Vazquez-readme-generator",
      image: "README.png",
    },
    {
      name: "SafeSpot",
      link: "https://safespotblog.herokuapp.com/",
      repo: "https://github.com/Clos86/SafeSpot",
      image: "safespot.png",
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