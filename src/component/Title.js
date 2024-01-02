import React from "react";
import ME from "../assets/PRofile.jpg";
import PropTypes from "prop-types";

function Title(props) {
  // const name = "";
  // const leadText = "I am a freelancer from india";
  const { name, leadText } = props;

  return (
    <div className="container pt-5  ">
      <div className="row text-center align-items-center my-5">
        <div className="col-12 col-md-6">
          <img
            src={ME}
            alt="Arti Shinde"
            className="image-fluid rounded-circle w-50"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            <span style={{ color: "white" }}>Hi, I am </span>
            <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light" style={{ color: "white" }}>
            {leadText}
          </h4>
        </div>
      </div>
    </div>
  );
}

Title.defaultProps = {
  name: "Arti Shinde",
  leadText: "I am a Web Developer from india",
};
Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
