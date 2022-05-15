import React from "react";

function Resume() {
  return (
    <div className="text-center text-lg">
      <div className="p-3 rounded-full bg-slate-400 text-gray-900 shadow-black shadow-sm w-full md:w-30 self-center">
        <a
          href={`${process.env.PUBLIC_URL}/assets/pdf/Old Resume.pdf`}
          target="_blank"
          className="hover:underline text-lg"
          rel="noreferrer">
          Download Resume
        </a>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-extrabold text-center">Front-End</h2>
        <p>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>Bootstrap</li>
          <li>TailwindCSS</li>
        </p>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-extrabold text-center">Back-End</h2>
        <p>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>RESTful API</li>
        </p>
        </div>
    </div>
  );
}

export default Resume;
