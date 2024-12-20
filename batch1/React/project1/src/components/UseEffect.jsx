import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function UseEffect() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setPeople(res.data);
        document.getElementById("p1").innerHTML = "Data Fetched Successfully";
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Display() {
    return people.map((person) => {
      return (
        <tr>
          <td>
            <Link to={`/singleProfilePage/${person.id}`}>{person.id}</Link>
          </td>
          <td>{person.name}</td>
          <td>{person.username}</td>
          <td>{person.email}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      {/* {console.log(people)} */}
      <h1 className="display-4 bg-primary p-2 text-white">
        Capture data from a given resource
      </h1>
      <p id="p1" className="bg-success text-white p-3"></p>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{Display()}</tbody>
      </table>
    </div>
  );
}

export default UseEffect;
