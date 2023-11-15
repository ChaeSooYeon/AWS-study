import { createServer } from "http";
import express from "express";
import { join } from "path";
import process from "process";

const app = express();

const port = 3000;
const __dirname = process.cwd();

//test
app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use(express.static(join(__dirname, "dist")));

app.get("*", (req, res) => {
    res.sendFile(join("__dirname", "dist", "index.html"));
});

createServer(app).listen(port, () => {
    console.log(`app listening at "http://localhost:${port}"`);
});
