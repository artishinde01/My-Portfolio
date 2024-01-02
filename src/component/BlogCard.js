import React from "react";

function BlogCard(props) {
  const { blog } = props;
  return (
    <div className="card shadow shadow-gray shadow-intensity-lg h-100">
      <img className="card-img-top " src={blog.imageUrl} alt="free iamges" />
      <div className="card-body">
        <h4 className="card-title ">{blog.title}</h4>
      </div>
      <p className="card-text mb-3 ml-auto">{blog.excerpt}</p>
      <a href="#" className="stretched-link"></a>
    </div>
  );
}

export default BlogCard;
