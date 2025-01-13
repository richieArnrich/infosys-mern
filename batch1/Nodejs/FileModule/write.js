// read data from MyFile.txt and write into MyFile2.txt
// read data from MyFile.txt
// write data into MyFile2.txt
const fs = require("fs");
const data = fs.readFileSync("./MyFile.txt", "utf8");
// write data into MyFile2.txt
fs.writeFileSync("./MyFile2.txt", data);

console.log("Read and write operation complete");

// write file asynchronously
// read data from MyFile.txt and write into MyFile2.txt
fs.writeFile("./MyFile3.txt", data, (err) => {
  if (err) {
    console.log(err);
  }
});

console.log("\n-------------I am after writing data----------------\n");
