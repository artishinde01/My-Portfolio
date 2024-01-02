import React from "react";
import A from "../assets/Project1.jpg";
import B from "../assets/Project2.jpg";
import C from "../assets/Project3.jpg";
import BlogCard from "./BlogCard";

function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",

      excerpt: "I have done this project for practice...",
      imageUrl: "../assets/Project1.jpg",
    },
    {
      id: 2,
      title: "Blog 2",

      excerpt: "I have done this project for practice...",
      imageUrl: "../assets/Project2.jpg",
    },
    {
      id: 3,
      title: "Blog 3",

      excerpt: "I have done this project for practice...",
      imageUrl: "../assets/Project3.jpg",
    },
    {
      id: 4,
      title: "Blog 4",

      excerpt: "I have done this project for practice...",
      imageUrl: "../assets/Project1.jpg",
    },
  ];

  return (
    <div className="container my-5 text-light text-center">
      <h1 className="font-weight-light">
        My <span className="text-info"> Blogs </span>
      </h1>
      <div className="lead">I share my views on technology in these blogs</div>

      <div className="row my-5 pt-3" style={{ color: "black" }}>
        {blogs.map((blog) => (
          <div key={blog.id} className="col-12 col-md-3 my-2">
            <BlogCard blog={blog} />
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
            &nbsp;&nbsp;&nbsp; See my blogs
            <i className="fa-solid fa-arrow-right align-middle"></i>
          </h5>
        </a>
      </div>
    </div>
  );
}
export default BlogSection;
