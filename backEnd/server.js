const express = require("express");
const port = 3000;
const app = express();
​
app.get("/", (req, res) => {
  res.send("Hello World!");
});
​
app.get("/janko", (req, res) => {
  res.send("Hello janko!");
});
​
app.get("/json", (req, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  var json = JSON.stringify({
    another: "item",
  });
  response.end(json);
});
​
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});