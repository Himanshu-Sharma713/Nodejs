// first NodeJS Code

const fs = require("node:fs/promises");

let filepath = "input.txt";
const message = "I learn NodeJS, ExpressJS and MongoDB..............";

fs.writeFile(filepath, message, (err) => {
  if (err) console.error("Error: ", err);
  else console.log("Created file SuccessFully...");
});
