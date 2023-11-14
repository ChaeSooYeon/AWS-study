import { createServer } from "http";
import express from "express";
import { join } from "path";

const app = express();

const port = 3000;

//test
app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use(express.static(join("__dirname", "dist")));

app.get("/*", (req, res) => {
    res.sendFile(join("__dirname", "dist", "index.html"));
});

createServer(app).listen(port, () => {
    console.log(`app listening at ${port}`);
});
