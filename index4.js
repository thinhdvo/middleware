// Band Name Generator Project

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import middleware
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(
    import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve the HTML file for GET requests
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// Handle POST requests
app.post("/submit", (req, res) => {
    var bandName = (req.body["street"] || "") + " " + (req.body["pet"] || "");
    res.send(`<h1>Your band name is: ${bandName}</h1>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});