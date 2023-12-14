const fs = require("node:fs/promises");

fs.writeFile("sample.txt", "Hello", function () {
  console.log("OK");
});

console.log(process.argv[2]);

// fs.readFile("./sample.txt", function (err, data) {
//   console.log(data);
// });
