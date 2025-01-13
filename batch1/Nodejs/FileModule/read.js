// reading MyFile.txt

// import fs module
const fs = require("fs");
// read file content synchrnously
const fileData = fs.readFileSync("./MyFile.txt", "utf-8");
console.log(fileData);

// read file data asynchrnously
fs.readFile("./MyFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("...................I am after reading the file...............");
