const http = require("http"); // Changed from "node:http" to "http"
const hostname = "127.0.0.1";
const port = 3001;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain"); // Changed from "text/bold" to "text/plain"
  res.end("practicalNode\n");
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


