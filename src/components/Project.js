import React from "react";
function Project(props) {
  const { name, repo, image, link } = props.project;
  return (
    <div>
    <a href={link} key={name} target="_blank" rel="noreferrer">      
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
    <a href={repo} key={name} target="_blank" rel="noreferrer">
     <p className="rounded-full bg-slate-400 text-gray-900 shadow-black shadow-sm text-center font-bold">{name} Repo</p>
    </a>
    </div>
  );
}

export default Project;
