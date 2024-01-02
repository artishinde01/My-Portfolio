import React from "react";

function ProjectCard(props) {
  const { project } = props;
  return (
    <div className="card shadow shadow-gray shadow-intensity-lg h-100">
      <img className="card-img-top " src={project.imageUrl} alt="free iamges" />
      <div className="card-body">
        <h4 className="card-title ">{project.title}</h4>
      </div>
      <p className="card-text mb-3 ml-auto">{project.excerpt}</p>
      <a href="#" className="stretched-link"></a>
    </div>
  );
}

export default ProjectCard;
