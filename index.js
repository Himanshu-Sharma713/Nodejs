// first NodeJS Code

const fs = require("node:fs");

let filepath = "input.txt";
const message = "I learn NodeJS, ExpressJS and MongoDB..............\n";
const updateMessage = "Himanshu Shamra\n";

// Write File in Node JS...

fs.writeFile(filepath, message, (err) => {
  if (err) console.error(err);
  else console.log("Created File Successfully...");
});

// update File in Node JS

// fs.appendFile(filepath, updateMessage, (err) => {
//   if (err) console.error(err);
//   else console.log("Updated File Successfully...");
// });

// read file data in Node JS

// fs.readFile(filepath, "utf8", (err, data) => {
//   if (err) console.error(err);
//   else console.log("Data: ", data);
// });

// Delete file in Node JS

// fs.unlink(filepath, (err) => {
//   if (err) console.error(err);
//   else console.log("Deleted File Successfully...");
// });
