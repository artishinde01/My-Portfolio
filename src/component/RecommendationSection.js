import React from "react";
import RecommendationCard from "./RecommendationCard";
import { v4 as uuid } from "uuid";

function RecommendationSection() {
  const recommendation = [
    {
      id: 1,
      name: "random guy 1",
      company: "ABC Company",
      designation: "CEO",
      message: "She is good ",
    },
    {
      id: 2,
      name: "random guy 2",
      company: "XYZ Company",
      designation: "Employee",
      message: "she is good ",
    },
    {
      id: 1,
      name: "random guy 3",
      company: "ABC Company",
      designation: "CEO",
      message: "She is good ",
    },
    {
      id: 1,
      name: "random guy 4",
      company: "ABC Company",
      designation: "Random",
      message: "She is good ",
    },
  ];
  return (
    <div className="container-fluid my-5">
      <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar ">
        {recommendation.map((recommendation) => (
          <RecommendationCard key={uuid()} recommendation={recommendation} />
        ))}
      </div>
    </div>
  );
}

export default RecommendationSection;
