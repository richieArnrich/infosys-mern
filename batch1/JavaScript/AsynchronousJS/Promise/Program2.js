function add(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a == "number" && typeof b == "number") {
        let result = a + b;
        resolve(result);
      } else {
        reject("Error: Both inputs must be numbers");
      }
    }, 2000);
  });
}

function sub(resultAdd, b = 10) {
  let result = resultAdd - b;
  console.log(result);
}

add(20, "40")
  .then(sub)
  .catch((err) => {
    console.log(err);
  });
