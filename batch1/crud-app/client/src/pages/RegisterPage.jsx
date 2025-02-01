import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";
import axios from "axios";
function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      fullName: fullName,
      email: email,
      contact: contact,
    };
    console.log(userObj);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/users/register",
        userObj
      );
      alert(data.message);
    } catch (err) {
      console.log(err);
    }
  };

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
            onChange={(e) => {
              setFullName(e.target.value);
            }}
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          />
        </div>
      </form>
    </Layout>
  );
}

export default RegisterPage;
