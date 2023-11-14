import { createServer } from "http";
import express from "express";
import { join } from "path";

const app = express();

const port = 3000;

//test
app.get("/test", (req, res) => {
    res.send("hello world");
});

//app.use(express.static(join("__dirname", "dist")));

app.use("*", (req, res) => {
    return handle(req, res, req.url);
});

createServer(app).listen(port, () => {
    console.log(`app listening at ${port}`);
});
