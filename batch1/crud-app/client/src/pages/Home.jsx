import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  async function deleteUser(id) {
    let response = await axios.delete(
      `http://localhost:4000/users/delete/${id}`
    );
    alert(response.data.message);
    window.location.reload();
  }

  function displayUsers() {
    return users.map((user, id) => {
      return (
        <tr key={id}>
          <td>{user.fullName}</td>
          <td>{user.email}</td>
          <td>{user.contact}</td>
          <td>
            <Link to={`/edit/${user._id}`}>
              <button className="btn btn-warning mx-1">Edit</button>
            </Link>
            <button
              className="btn btn-danger mx-1"
              onClick={() => deleteUser(user._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  }

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  return (
    <Layout>
      <h3 className="text-center text-primary p-3">Registered Profiles</h3>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>Profile Name</th>
            <th>Profile Email</th>
            <th>Profile Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{displayUsers()}</tbody>
      </table>
    </Layout>
  );
}

export default Home;
