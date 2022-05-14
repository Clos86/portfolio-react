import React from 'react';
import gotRecette from "../../assets/images/gotRecette.JPG";
import README from "../../assets/images/README.JPG";
import safespot from "../../assets/images/safespot.JPG";

const Project = () => {
  return (
    <div>
    <div>
    <h2>Work</h2>
    </div>
  <section id="work" class="works">
    <div>
      <h3>goRecette</h3>
      <div>
        <a href="https://github.com/Clos86/goRecette">
          <img src={gotRecette} alt="goRecette screenshot" />
        </a>
    </div>
    </div>
    <div>
      <h3>README Generator</h3>
      <div>
        <a href="https://github.com/Clos86/Vazquez-readme-generator">
          <img src={README} alt="README screenshot" />
        </a>
      </div>
    </div>
    <div>
      <h3>Safespot</h3>
      <div>
        <a href="https://github.com/Clos86/SafeSpot">
          <img src={safespot} alt="Safespot screenshot" />
        </a>
      </div>
    </div>
  </section>
  </div>
  );
};

export default Project;