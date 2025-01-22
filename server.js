import http from "http";
import app from "./app.js";

let server = http.createServer(app);

server.listen(5000, () => {
  console.log("server running in port 5000");
});
