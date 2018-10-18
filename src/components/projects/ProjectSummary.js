import React from "react";

export default ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darkened-3 ">
        <span className="card-title">{project.title}</span>
        <p>
          {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text"> 4 October</p>
      </div>
    </div>
  );
};
