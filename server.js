// Create server using http

const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("<h1>Himanshu Sharma is Jai Ho...</h1>");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}/`);
});
