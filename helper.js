const name = "Mike";
const add = function (a, b) {
  return a + b;
};

const fs = require("fs");

const person = {
  name: "Make",
  age: 30,
};

const write = function () {
  fs.writeFile("sanple");
};
module.exports = { name, add };
