import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      description: "",
      submitMessage: "",
      submitMessageTextColor: "",
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    let isSuccessful = true;
    const { name } = this.name;
    if (isSuccessful) {
      this.setState({
        submitMessage: "Thank you ${name} .I will contact you Soon",
        submitMessageTextColor: "text - info",
      });
    } else {
      this.setState({
        submitMessage: "Oops ! Something went wrong . Please try again Later ",
      });
    }
  };

  render() {
    return (
      <div
        className="container my-5 "
        style={{ backgroundColor: "white", innerWidth: "100%" }}
      >
        <h1 className="font-weigth-light text-center py-5">
          <span className="text-info"> Thank you!</span> for your interest
        </h1>
        <div className="row justify-content-center">
          <div className="col-11 col-lg-5 ">
            <form onSubmit={this.onSubmit}>
              <div className="form-group pb-2 pt-2">
                <label htmlFor="name"> Name *</label>
                <input
                  className="form-control "
                  type="text"
                  name="name"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group pb-2 pt-2">
                <label htmlFor="name"> Email *</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group pb-2 pt-2">
                <lable htmlFor="description">Tell me about your project</lable>
                <textarea
                  className="form-control"
                  name="description"
                  rows="5"
                  onChange={this.onChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-dark float-right"
                style={{ backgroundColor: "black" }}
              >
                Let's talk business
              </button>
            </form>
          </div>
        </div>
        <div className="py-5 mx-2 text-center">
          {/*<h5 className={submitStatus}>{submitMessage}</h5> */}
        </div>
      </div>
    );
  }
}
export default Contact;
