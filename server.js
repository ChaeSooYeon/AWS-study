import { createServer } from "http";
import express from "express";
import { join } from "path";

const app = express();

const port = 3300;

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.use(express.static(join("__dirname", "build")));

app.get("/*", (req, res) => {
    res.set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Date: Date.now()
    });
    res.sendFile(join("__dirname", "build", "index.html"));
});

createServer(app).listen(port, () => {
    console.log(`app listening at ${port}`);
});
