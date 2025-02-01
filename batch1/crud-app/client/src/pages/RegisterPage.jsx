import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
function RegisterPage() {
  return (
    <Layout>
      <form style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
        <div className="form-group mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fulname"
            placeholder="Enter your name"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            placeholder="enter your contact"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <input type="submit" className="btn btn-primary" />
        </div>
      </form>
    </Layout>
  );
}

export default RegisterPage;
