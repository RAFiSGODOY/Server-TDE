const express = require("express");

const server = express();

server.get("/3000", (req, res) => {
    res.send("Server Running")
})

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});