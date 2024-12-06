function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Error: Both inputs must be numbers");
      }
    }, 2000);
  });
}

function displayAddResult(result) {
  let resultEle = document.getElementById("result");
  resultEle.innerText = result;
  resultEle.style.backgroundColor = "lightgreen";
  console.log(result);
}

function displayErrMess(err) {
  console.log(err);
  let resultEle = document.getElementById("result");
  resultEle.innerHTML = err;
  result.style.backgroundColor = "red";
}
add(13, "14").then(displayAddResult).catch(displayErrMess);
