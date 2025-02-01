import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditPage() {
  // userparam to get id
  const { id } = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();

  //   function to fetch details of the particular user
  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/getsingle/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
        setFullName(user.fullName);
        setEmail(user.email);
        setContact(user.contact);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userObj = {
      fullName: fullName,
      email: email,
      contact: contact,
    };
    console.log(userObj);
    try {
      const { data } = await axios.put(
        `http://localhost:4000/users/update/${id}`,
        userObj
      );
      alert(data.message);
    } catch (err) {
      console.log(err);
    }
  };
  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
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
            defaultValue={user.fullName}
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
            defaultValue={user.email}
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
            defaultValue={user.contact}
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

export default EditPage;
