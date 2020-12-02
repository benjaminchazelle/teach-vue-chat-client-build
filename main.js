const express = require("express");
const app = express();
const http = require("http").createServer(app);

app.use(express.static("build"));

const port = process.env.PORT || 8080;

http.listen(port, () => {
    console.log("Server is listening on", port);
});
