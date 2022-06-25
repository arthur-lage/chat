import express from "express";
import cors from "cors";

import { config } from "dotenv";
import mongoose from "mongoose";
config();

const connectionURL = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.pkc0f.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(`Couldn't connect to database. Error: ${err}`);
  });

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}`);
});
