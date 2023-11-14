import { createServer } from "http";
import express from "express";
import { join } from "path";

const app = express();

const port = 3000;

app.get("/ping", (req, res) => {
    res.send("pong");
});

// app.use(static(join("./", "build")));

app.get("/*", (req, res) => {
    res.set({
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Date: Date.now()
    });
    res.sendFile(join("./", "build", "index.html"));
});

createServer(app).listen(port, () => {
    console.log(`app listening at ${port}`);
});
