import React from "react";
import A from "../assets/Project1.jpg";
import B from "../assets/Project2.jpg";
import C from "../assets/Project3.jpg";
import ProjectCard from "./ProjectCard";

function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "Project 1",

      excerpt: "I have done this project for practice...",
      imageUrl: "../assets/Project1.jpg",
    },
    {
      id: 2,
      title: "Project 2",

      excerpt: "I have done this project for practice...",
      imageUrl: "../assets/Project2.jpg",
    },
    {
      id: 3,
      title: "Project 3",

      excerpt: "I have done this project for practice...",
      imageUrl: "../assets/Project3.jpg",
    },
    {
      id: 4,
      title: "Project 4",

      excerpt: "I have done this project for practice...",
      imageUrl: "../assets/Project1.jpg",
    },
  ];

  return (
    <div className="container my-5 text-light text-center">
      <h1 className="font-weight-light">
        My <span className="text-info"> Projects</span>
      </h1>
      <div className="lead">I build Projects. Just like this website</div>

      <div className="row my-5 pt-3" style={{ color: "black" }}>
        {projects.map((project) => (
          <div key={project.id} className="col-12 col-md-3 my-2">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      <div className="my-5">
        <a
          href="/"
          className="text-light text-right"
          style={{ textDecoration: " none " }}
        >
          <h5>
            See my projects
            <i className="fa-solid fa-arrow-right align-middle"></i>
          </h5>
        </a>
      </div>
    </div>
  );
}
export default ProjectSection;
