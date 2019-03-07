const express = require("express");

const app = express();
app.get("/test", (req, res) => {
  res.send("Hello World.");
});

const port = 3001;
app.listen(port, () => {
  console.log(`this server is open at prot: ${port}`);
});
