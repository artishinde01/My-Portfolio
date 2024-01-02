import React from "react";
import Skill from "./Skill";
import { v4 as uuid } from "uuid";
import img1 from "../assets/HTML.jpg";
import img2 from "../assets/CSS.jpg";
import img3 from "../assets/javaScript.jpg";
import img4 from "../assets/Bootstrap.jpg";
import img5 from "../assets/React.jpg";
import img6 from "../assets/MySQL.jpg";
import img7 from "../assets/Python.jpg";
import img8 from "../assets/Flask.jpg";

function SkillStack() {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      imageUrl: "../assets/HTML.jpg",
      starsTotal: 4,
      starsActive: 3,
    },
    {
      id: 2,
      name: "CSS3",
      imageUrl: "../assets/CSS.jpg",
      starsTotal: 4,
      starsActive: 3,
    },
    {
      id: 3,
      name: "Javascript",
      imageUrl: "../assets/javaScript.jpg",
      starsTotal: 4,
      starsActive: 3,
    },
    {
      id: 4,
      name: "Bootstrap 4",
      imageUrl: "../assets/Bootstrap.jpg",
      starsTotal: 4,
      starsActive: 3,
    },
    {
      id: 5,
      name: "React",
      imageUrl: "../assets/React.jpg",
      starsTotal: 4,
      starsActive: 2,
    },
    {
      id: 6,
      name: "MySQL",
      imageUrl: "../assets/MySQL.jpg",
      starsTotal: 4,
      starsActive: 3,
    },
    {
      id: 7,
      name: "Python",
      imageUrl: "../assets/Python.jpg",
      starsTotal: 4,
      starsActive: 2,
    },
    {
      id: 8,
      name: "Flask",
      imageUrl: "../assets/Flask.jpg",
      starsTotal: 4,
      starsActive: 2,
    },
  ];
  const finalSkillRow = [];

  for (let i = 0; i < 2; i++) {
    let skillRow = skills.slice(i * 4, (i + 1) * 4);
    finalSkillRow.push(
      <div key={uuid()} className="d-flex justify-content-around py-3 mx-5">
        {skillRow.map((skill) => (
          <Skill key={uuid()} skill={skill} />
        ))}
      </div>
    );
  }
  return (
    <div className="bg-black w-100 h-100 ">
      <div className="container text-center py-2 pt-10 pt-10">
        <h1 className="font-weight-light">
          <span className="text-info">Technology</span>
          <span style={{ color: "#f5fefd" }}> Stack</span>
        </h1>
        <div className="lead pb-5" style={{ color: "#f5fefd" }}>
          I design, develop and deliver with these weapons
        </div>
        {finalSkillRow}
      </div>
    </div>
  );
}
export default SkillStack;
