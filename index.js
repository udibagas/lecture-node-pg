const express = require("express");
const router = require("./routes");
const app = express(); // instance
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Request -> Middleware -> Response
