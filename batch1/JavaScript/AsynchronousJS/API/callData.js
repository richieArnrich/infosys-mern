// capture the data given by https://jsonplaceholder.typicode.com/users and display in the form
// a divison
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    // console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
    displayResponseData(res);
  })
  .catch((err) => {
    console.log(err);
  });

function displayResponseData(res) {
  let div = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerHTML = "User Names";
  div.appendChild(h3);
  for (let user of res) {
    console.log(user);
    let p = document.createElement("p");
    p.innerHTML = user.name;
    div.appendChild(p);
  }

  document.body.appendChild(div);
}
