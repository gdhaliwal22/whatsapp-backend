// importing
import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware

// DB config

// ????

// api routes
app.get("/", (req, res) => res.status(200).send("Hello World"));

// listener
app.listen(port, () => console.log(`Listening on local host ${port}`));
