import React from "react";

function footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "/FFFFFF" }}
      >
        <div className="py-5">
          <h2 className="text-black">Intrested in working with me?</h2>
          <button
            className="btn btn-outline-light btn-lg"
            style={{ color: "black" }}
          >
            Let's talk
          </button>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 py-3 ">
            <h5 className=" pd-3" style={{ color: " black" }}>
              More Links
            </h5>
            <a
              href="/"
              className="text-black d-block"
              style={{ textDecoration: "none", color: "black" }}
            >
              Blogs
            </a>
            <a
              href="/"
              className="text-black d-block"
              style={{ textDecoration: "none", color: "black" }}
            >
              Home
            </a>
            <a
              href="/"
              className="text- d-block"
              style={{ textDecoration: "none", color: "black" }}
            >
              Projects
            </a>
            <a
              href="/"
              className="text- d-block"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact Me
            </a>
            <a
              href="/"
              className="text-black d-block"
              style={{ textDecoration: "none", color: "black" }}
            >
              Write a recommendation{" "}
              <i className="fa-sharp fa-solid fa-heart"></i>
            </a>
          </div>
          <div className="col-12 col-md-4 text-justify text-black py-3">
            <p>
              Java was originally designed for interactive television, but it
              was too advanced technology for the digital cable television
              industry at the time. The history of Java starts with the Green
              Team. Java team members (also known as Green Team), initiated this
              project to develop a language for digital devices such as set-top
              boxes, televisions, etc. However, it was best suited for internet
              programming. Later.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className=" pd-3" style={{ color: "white" }}>
              Social
            </h5>
            <a
              href="/"
              style={{ textDecoration: "none", color: "white" }}
              className=""
            >
              <i className="fa-brands fa-linkedin-in text-white d-block h2"></i>
            </a>
            <a
              href="/"
              style={{ textDecoration: "none", color: "white" }}
              className=""
            >
              <i className="fa-brands fa-github text-white d-block h2"></i>
            </a>
            <a
              href="/"
              style={{ textDecoration: "none", color: "white" }}
              className=""
            >
              <i className="fa-solid fa-envelope text-white d-block h2"></i>
            </a>
          </div>
        </div>

        <div className="text-muted py-3">
          <p>Copyright @ Arti Shinde 2023</p>
        </div>
      </div>
    </footer>
  );
}
export default footer;
