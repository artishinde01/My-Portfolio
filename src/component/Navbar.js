import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-sm fixed-top"
      style={{ backgroundColor: "white" }}
    >
      <div className="container my-2">
        <a href="/" className="navbar-brand text-light font-weigth-bold h2">
          Arti Shinde
        </a>
        <button className=" btn btn-outline-info ml-auto">Contact me</button>
        <button
          className="navbar-toggler btn"
          data-toggle="collapse"
          data-target="#demo"
        >
          <i className="fa fa-bars text-light"></i>
        </button>
        <div
          className="collapse  navbar-collapse flex-grow-0"
          id="demo"
          style={{ color: "white" }}
        >
          <div className="navbar-nav">
            <a href="#" className="nav-item nav-link text-light h6 mx-3">
              Blogs
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
