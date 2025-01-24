function fetchAllUsers() {
  fetch("http://localhost:8000/users")
    .then((res) => res.json())
    .then((res) => {
      displayData(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

const table = document.getElementById("users");

function displayData(res) {
  const users = res;
  console.log(res);
  const headerRow = document.createElement("tr");
  const header1 = document.createElement("th");
  header1.innerHTML = "User ID";
  headerRow.appendChild(header1);
  const header2 = document.createElement("th");
  header2.innerHTML = "Name";
  headerRow.appendChild(header2);
  const header3 = document.createElement("th");
  header3.innerHTML = "Age";
  headerRow.appendChild(header3);
  const header4 = document.createElement("th");
  header4.innerHTML = "Occupation";
  headerRow.appendChild(header4);
  table.appendChild(headerRow);
  users.map((user) => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const ageCell = document.createElement("td");
    const occupationCell = document.createElement("td");
    idCell.innerHTML = user.userId;
    nameCell.innerHTML = user.name;
    ageCell.innerHTML = user.age;
    occupationCell.innerHTML = user.occupation;
    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(ageCell);
    row.appendChild(occupationCell);
    table.appendChild(row);
  });
}

function fetchSingleUser() {
  const userId = document.getElementById("userId").value;
  fetch(`http://localhost:8000/users/${userId}`)
    .then((res) => res.json())
    .then((res) => {
      displaySingleUser(res);
    })
    .catch((err) => {
      alert("User Not found");
      console.log(err);
    });
  event.preventDefault();
}
function displaySingleUser(user) {
  console.log(user);
  const userDiv = document.getElementById("singleUser");
  for (let prop in user) {
    const row = document.createElement("p");
    row.innerHTML = `${prop}: ${user[prop]}`;
    userDiv.appendChild(row);
  }
}
fetchAllUsers();
