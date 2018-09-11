import React from "react";

const HelloWorld = ({ tech }) => {
  console.log(tech);
  return (
    <div className="hello-world">
      Hw<span className="hello-world__tech">{tech}!</span>
    </div>
  );
};

export default HelloWorld;
