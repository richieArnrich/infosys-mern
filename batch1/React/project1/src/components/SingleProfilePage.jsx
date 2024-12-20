import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProfilePage() {
  const [people, setPeople] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setPeople(res.data);
    });
  }, []);
  console.log(id);

  function Display() {
    return people.map((person) => {
      if (person.id === parseInt(id)) {
        return (
          <div>
            <p>{person.id}</p>
            <p>{person.name}</p>
            <p>{person.username}</p>
            <p>{person.email}</p>
            <p>
              {person.address.stree}, {person.address.suite},{" "}
              {person.address.city}, {person.address.zipcode}
            </p>
          </div>
        );
      }
    });
  }
  return (
    <div>
      <h1>Single Profile Page, ID captured is {id}</h1>
      {Display()}
    </div>
  );
}

export default SingleProfilePage;
