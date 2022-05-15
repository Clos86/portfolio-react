import React from "react";
function Project(props) {
  const { name, link, image } = props.project;
  return (
    <a href={link} key={name} target="_blank" rel="noreferrer">
      <p className="text-center font-bold">{name}</p>
      <div
        className="w-96 h-64 m-2 shadow-md shadow-black rounded-md relative"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",          
        }}>        
      </div>
    </a>
  );
}

export default Project;
