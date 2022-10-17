import express from "express";
import cors from "cors";
import http from "http";

const PORT = process.env.PORT || 5050;
const SOCKET_PORT = process.env.PORT || 5051;

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (r, rr) => {
  rr.send("ola")
})

server.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
